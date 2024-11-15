:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sfold'
.. highlight: bash

sfold
=====

.. conda:recipe:: sfold
   :replaces_section_title:
   :noindex:

   Software for Statistical Folding of Nucleic Acids

   :homepage: https://github.com/Ding-RNA-Lab/Sfold
   :license: OTHER
   :recipe: /`sfold <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sfold>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sfold/meta.yaml>`_

   


.. conda:package:: sfold

   |downloads_sfold| |docker_sfold|

   :versions:
      
      

      ``2.2-2``,  ``2.2-1``,  ``2.2-0``

      

   
   :depends gawk: 
   :depends grep: 
   :depends libgcc: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cluster: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install sfold

   and update with::

      mamba update sfold

  To create a new environment, run::

      mamba create --name myenvname sfold

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sfold:<tag>

   (see `sfold/tags`_ for valid values for ``<tag>``)


.. |downloads_sfold| image:: https://img.shields.io/conda/dn/bioconda/sfold.svg?style=flat
   :target: https://anaconda.org/bioconda/sfold
   :alt:   (downloads)
.. |docker_sfold| image:: https://quay.io/repository/biocontainers/sfold/status
   :target: https://quay.io/repository/biocontainers/sfold
.. _`sfold/tags`: https://quay.io/repository/biocontainers/sfold?tab=tags


.. raw:: html

    <script>
        var package = "sfold";
        var versions = ["2.2","2.2","2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sfold/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sfold/README.html