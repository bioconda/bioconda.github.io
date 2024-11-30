:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'braker'
.. highlight: bash

braker
======

.. conda:recipe:: braker
   :replaces_section_title:
   :noindex:

   BRAKER1\: Unsupervised RNA\-Seq\-based genome annotation with GeneMark\-ET and AUGUSTUS

   :homepage: http://bioinf.uni-greifswald.de/augustus/
   :license: Artistic license
   :recipe: /`braker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/braker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/braker/meta.yaml>`_

   


.. conda:package:: braker

   |downloads_braker| |docker_braker|

   :versions:
      
      

      ``1.9-6``,  ``1.9-5``,  ``1.9-4``,  ``1.9-3``,  ``1.9-2``,  ``1.9-1``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-app-cpanminus: 
   :depends perl-parallel-forkmanager: 
   :depends perl-pathtools: 
   :depends perl-scalar-util-numeric: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install braker

   and update with::

      mamba update braker

  To create a new environment, run::

      mamba create --name myenvname braker

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/braker:<tag>

   (see `braker/tags`_ for valid values for ``<tag>``)


.. |downloads_braker| image:: https://img.shields.io/conda/dn/bioconda/braker.svg?style=flat
   :target: https://anaconda.org/bioconda/braker
   :alt:   (downloads)
.. |docker_braker| image:: https://quay.io/repository/biocontainers/braker/status
   :target: https://quay.io/repository/biocontainers/braker
.. _`braker/tags`: https://quay.io/repository/biocontainers/braker?tab=tags


.. raw:: html

    <script>
        var package = "braker";
        var versions = ["1.9","1.9","1.9","1.9","1.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/braker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/braker/README.html