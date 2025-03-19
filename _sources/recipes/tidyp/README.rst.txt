:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tidyp'
.. highlight: bash

tidyp
=====

.. conda:recipe:: tidyp
   :replaces_section_title:
   :noindex:

   Program for cleaning up and validating HTML

   :homepage: http://www.tidyp.com/
   :license: BSD-like
   :recipe: /`tidyp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tidyp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tidyp/meta.yaml>`_

   


.. conda:package:: tidyp

   |downloads_tidyp| |docker_tidyp|

   :versions:
      
      

      ``1.04-8``,  ``1.04-7``,  ``1.04-6``,  ``1.04-4``,  ``1.04-3``,  ``1.04-2``,  ``1.04-1``,  ``1.04-0``

      

   
   :depends libgcc: ``>=13``
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

      mamba install tidyp

   and update with::

      mamba update tidyp

  To create a new environment, run::

      mamba create --name myenvname tidyp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tidyp:<tag>

   (see `tidyp/tags`_ for valid values for ``<tag>``)


.. |downloads_tidyp| image:: https://img.shields.io/conda/dn/bioconda/tidyp.svg?style=flat
   :target: https://anaconda.org/bioconda/tidyp
   :alt:   (downloads)
.. |docker_tidyp| image:: https://quay.io/repository/biocontainers/tidyp/status
   :target: https://quay.io/repository/biocontainers/tidyp
.. _`tidyp/tags`: https://quay.io/repository/biocontainers/tidyp?tab=tags


.. raw:: html

    <script>
        var package = "tidyp";
        var versions = ["1.04","1.04","1.04","1.04","1.04"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tidyp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tidyp/README.html