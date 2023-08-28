:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'maaslin'
.. highlight: bash

maaslin
=======

.. conda:recipe:: maaslin
   :replaces_section_title:
   :noindex:

   MaAsLin is a multivariate statistical framework that finds associations between clinical metadata and microbial community abundance or function.

   :homepage: https://huttenhower.sph.harvard.edu/maaslin
   :license: Custom
   :recipe: /`maaslin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maaslin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maaslin/meta.yaml>`_

   


.. conda:package:: maaslin

   |downloads_maaslin| |docker_maaslin|

   :versions:
      
      

      ``0.05-0``,  ``0.04-1``,  ``0.04-0``,  ``0.0.5-2``,  ``0.0.5-1``

      

   
   :depends r-agricolae: 
   :depends r-base: ``>=3.5.1,<3.5.2.0a0``
   :depends r-gam: 
   :depends r-gamlss: 
   :depends r-gbm: 
   :depends r-glmnet: 
   :depends r-inlinedocs: 
   :depends r-logging: 
   :depends r-optparse: 
   :depends r-outliers: 
   :depends r-penalized: 
   :depends r-pscl: 
   :depends r-robustbase: 
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

      mamba install maaslin

   and update with::

      mamba update maaslin

  To create a new environment, run::

      mamba create --name myenvname maaslin

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/maaslin:<tag>

   (see `maaslin/tags`_ for valid values for ``<tag>``)


.. |downloads_maaslin| image:: https://img.shields.io/conda/dn/bioconda/maaslin.svg?style=flat
   :target: https://anaconda.org/bioconda/maaslin
   :alt:   (downloads)
.. |docker_maaslin| image:: https://quay.io/repository/biocontainers/maaslin/status
   :target: https://quay.io/repository/biocontainers/maaslin
.. _`maaslin/tags`: https://quay.io/repository/biocontainers/maaslin?tab=tags


.. raw:: html

    <script>
        var package = "maaslin";
        var versions = ["0.05","0.04","0.04","0.0.5","0.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/maaslin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/maaslin/README.html