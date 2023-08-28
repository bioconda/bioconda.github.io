:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'paste-bio'
.. highlight: bash

paste-bio
=========

.. conda:recipe:: paste-bio
   :replaces_section_title:
   :noindex:

   A computational method to align and integrate spatial transcriptomics experiments.

   :homepage: https://github.com/raphael-group/paste
   :license: BSD / BSD
   :recipe: /`paste-bio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/paste-bio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/paste-bio/meta.yaml>`_

   


.. conda:package:: paste-bio

   |downloads_paste-bio| |docker_paste-bio|

   :versions:
      
      

      ``1.4.0-0``,  ``1.3.0-0``,  ``1.2.2-0``,  ``1.2.0-0``,  ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``

      

   
   :depends pandas: 
   :depends pot: 
   :depends python: 
   :depends scanpy: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends seaborn: 
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

      mamba install paste-bio

   and update with::

      mamba update paste-bio

  To create a new environment, run::

      mamba create --name myenvname paste-bio

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/paste-bio:<tag>

   (see `paste-bio/tags`_ for valid values for ``<tag>``)


.. |downloads_paste-bio| image:: https://img.shields.io/conda/dn/bioconda/paste-bio.svg?style=flat
   :target: https://anaconda.org/bioconda/paste-bio
   :alt:   (downloads)
.. |docker_paste-bio| image:: https://quay.io/repository/biocontainers/paste-bio/status
   :target: https://quay.io/repository/biocontainers/paste-bio
.. _`paste-bio/tags`: https://quay.io/repository/biocontainers/paste-bio?tab=tags


.. raw:: html

    <script>
        var package = "paste-bio";
        var versions = ["1.4.0","1.3.0","1.2.2","1.2.0","1.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/paste-bio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/paste-bio/README.html