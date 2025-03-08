:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'danbing-tk'
.. highlight: bash

danbing-tk
==========

.. conda:recipe:: danbing-tk
   :replaces_section_title:
   :noindex:

   Toolkit for VNTR genotyping and repeat\-pan genome graph construction

   :homepage: https://github.com/ChaissonLab/danbing-tk
   :license: BSD-3-Clause
   :recipe: /`danbing-tk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/danbing-tk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/danbing-tk/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41467-021-24378-0`

   


.. conda:package:: danbing-tk

   |downloads_danbing-tk| |docker_danbing-tk|

   :versions:
      
      

      ``1.3.2.5-0``

      

   
   :depends eigen: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install danbing-tk

   and update with::

      mamba update danbing-tk

  To create a new environment, run::

      mamba create --name myenvname danbing-tk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/danbing-tk:<tag>

   (see `danbing-tk/tags`_ for valid values for ``<tag>``)


.. |downloads_danbing-tk| image:: https://img.shields.io/conda/dn/bioconda/danbing-tk.svg?style=flat
   :target: https://anaconda.org/bioconda/danbing-tk
   :alt:   (downloads)
.. |docker_danbing-tk| image:: https://quay.io/repository/biocontainers/danbing-tk/status
   :target: https://quay.io/repository/biocontainers/danbing-tk
.. _`danbing-tk/tags`: https://quay.io/repository/biocontainers/danbing-tk?tab=tags


.. raw:: html

    <script>
        var package = "danbing-tk";
        var versions = ["1.3.2.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/danbing-tk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/danbing-tk/README.html