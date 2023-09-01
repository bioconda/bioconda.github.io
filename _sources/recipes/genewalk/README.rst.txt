:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genewalk'
.. highlight: bash

genewalk
========

.. conda:recipe:: genewalk
   :replaces_section_title:
   :noindex:

   Determine gene function based on network embeddings.

   :homepage: https://github.com/churchmanlab/genewalk
   :documentation: https://genewalk.readthedocs.io/en/latest/
   
   :license: BSD / BSD-2-Clause
   :recipe: /`genewalk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genewalk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genewalk/meta.yaml>`_

   


.. conda:package:: genewalk

   |downloads_genewalk| |docker_genewalk|

   :versions:
      
      

      ``1.6.1-0``,  ``1.5.3-0``,  ``1.5.2-0``,  ``1.5.1-0``

      

   
   :depends gensim: ``>=4.0``
   :depends goatools: 
   :depends matplotlib-base: 
   :depends networkx: ``>=2.1``
   :depends numpy: 
   :depends pandas: 
   :depends plotly: ``>=4.0.0``
   :depends python: 
   :depends scipy: ``>=1.3.0``
   :depends seaborn: 
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

      mamba install genewalk

   and update with::

      mamba update genewalk

  To create a new environment, run::

      mamba create --name myenvname genewalk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/genewalk:<tag>

   (see `genewalk/tags`_ for valid values for ``<tag>``)


.. |downloads_genewalk| image:: https://img.shields.io/conda/dn/bioconda/genewalk.svg?style=flat
   :target: https://anaconda.org/bioconda/genewalk
   :alt:   (downloads)
.. |docker_genewalk| image:: https://quay.io/repository/biocontainers/genewalk/status
   :target: https://quay.io/repository/biocontainers/genewalk
.. _`genewalk/tags`: https://quay.io/repository/biocontainers/genewalk?tab=tags


.. raw:: html

    <script>
        var package = "genewalk";
        var versions = ["1.6.1","1.5.3","1.5.2","1.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genewalk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genewalk/README.html