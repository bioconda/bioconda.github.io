:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bis-snp-utils'
.. highlight: bash

bis-snp-utils
=============

.. conda:recipe:: bis-snp-utils
   :replaces_section_title:
   :noindex:

   bis\-snp\-utils are support tools for Bis\-SNP

   :homepage: http://people.csail.mit.edu/dnaase/bissnp2011/
   :license: MIT
   :recipe: /`bis-snp-utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bis-snp-utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bis-snp-utils/meta.yaml>`_

   


.. conda:package:: bis-snp-utils

   |downloads_bis-snp-utils| |docker_bis-snp-utils|

   :versions:
      
      

      ``0.0.1-4``,  ``0.0.1-3``,  ``0.0.1-2``,  ``0.0.1-1``,  ``0.0.1-0``

      

   
   :depends perl: 
   :depends perl-getopt-long: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bis-snp-utils

   and update with::

      mamba update bis-snp-utils

  To create a new environment, run::

      mamba create --name myenvname bis-snp-utils

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bis-snp-utils:<tag>

   (see `bis-snp-utils/tags`_ for valid values for ``<tag>``)


.. |downloads_bis-snp-utils| image:: https://img.shields.io/conda/dn/bioconda/bis-snp-utils.svg?style=flat
   :target: https://anaconda.org/bioconda/bis-snp-utils
   :alt:   (downloads)
.. |docker_bis-snp-utils| image:: https://quay.io/repository/biocontainers/bis-snp-utils/status
   :target: https://quay.io/repository/biocontainers/bis-snp-utils
.. _`bis-snp-utils/tags`: https://quay.io/repository/biocontainers/bis-snp-utils?tab=tags


.. raw:: html

    <script>
        var package = "bis-snp-utils";
        var versions = ["0.0.1","0.0.1","0.0.1","0.0.1","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bis-snp-utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bis-snp-utils/README.html