:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genodsp'
.. highlight: bash

genodsp
=======

.. conda:recipe:: genodsp
   :replaces_section_title:
   :noindex:

   General workbench for processing signals along genomic \(chromosomal\) intervals

   :homepage: https://github.com/rsharris/genodsp
   :license: `GPL-3.0-only <https://github.com/rsharris/genodsp/blob/master/LICENSE>`_
   :recipe: /`genodsp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genodsp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genodsp/meta.yaml>`_

   


.. conda:package:: genodsp

   |downloads_genodsp| |docker_genodsp|

   :versions:
      
      

      ``0.0.10-1``,  ``0.0.10-0``,  ``0.0.3-1``,  ``0.0.3-0``

      

   
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

      mamba install genodsp

   and update with::

      mamba update genodsp

  To create a new environment, run::

      mamba create --name myenvname genodsp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/genodsp:<tag>

   (see `genodsp/tags`_ for valid values for ``<tag>``)


.. |downloads_genodsp| image:: https://img.shields.io/conda/dn/bioconda/genodsp.svg?style=flat
   :target: https://anaconda.org/bioconda/genodsp
   :alt:   (downloads)
.. |docker_genodsp| image:: https://quay.io/repository/biocontainers/genodsp/status
   :target: https://quay.io/repository/biocontainers/genodsp
.. _`genodsp/tags`: https://quay.io/repository/biocontainers/genodsp?tab=tags


.. raw:: html

    <script>
        var package = "genodsp";
        var versions = ["0.0.10","0.0.10","0.0.3","0.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genodsp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genodsp/README.html