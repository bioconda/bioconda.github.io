:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'abawaca'
.. highlight: bash

abawaca
=======

.. conda:recipe:: abawaca
   :replaces_section_title:
   :noindex:

   abawaca is a binning program for metagenomics

   :homepage: https://github.com/CK7/abawaca
   :license: open source
   :recipe: /`abawaca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abawaca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abawaca/meta.yaml>`_
   :links: doi: :doi:`10.1038/nature14486`

   


.. conda:package:: abawaca

   |downloads_abawaca| |docker_abawaca|

   :versions:
      
      

      ``1.00-7``,  ``1.00-6``,  ``1.00-5``,  ``1.00-4``,  ``1.00-3``,  ``1.00-2``,  ``1.00-1``,  ``1.00-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install abawaca

   and update with::

      mamba update abawaca

  To create a new environment, run::

      mamba create --name myenvname abawaca

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/abawaca:<tag>

   (see `abawaca/tags`_ for valid values for ``<tag>``)


.. |downloads_abawaca| image:: https://img.shields.io/conda/dn/bioconda/abawaca.svg?style=flat
   :target: https://anaconda.org/bioconda/abawaca
   :alt:   (downloads)
.. |docker_abawaca| image:: https://quay.io/repository/biocontainers/abawaca/status
   :target: https://quay.io/repository/biocontainers/abawaca
.. _`abawaca/tags`: https://quay.io/repository/biocontainers/abawaca?tab=tags


.. raw:: html

    <script>
        var package = "abawaca";
        var versions = ["1.00","1.00","1.00","1.00","1.00"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/abawaca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/abawaca/README.html