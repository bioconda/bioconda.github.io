:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'eternafold'
.. highlight: bash

eternafold
==========

.. conda:recipe:: eternafold
   :replaces_section_title:
   :noindex:

   RNA structure prediction algorithm improved through crowdsourced training data

   :homepage: https://github.com/eternagame/EternaFold
   :documentation: https://eternagame.github.io/EternaFold
   
   :license: BSD / BSD-3-Clause
   :recipe: /`eternafold <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eternafold>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eternafold/meta.yaml>`_

   EternaFold performs multitask learning to improve RNA structure prediction. 
   Its training tasks include 1\) predicting single structures\, 2\) maximizing the 
   likelihood of structure probing data\, and 3\) predicting experimentally\-measured 
   affinities of RNA molecules to proteins and small molecules. Described in the paper 
   https\:\/\/www.nature.com\/articles\/s41592\-022\-01605\-0



.. conda:package:: eternafold

   |downloads_eternafold| |docker_eternafold|

   :versions:
      
      

      ``1.3.1-1``,  ``1.3.1-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install eternafold

   and update with::

      mamba update eternafold

  To create a new environment, run::

      mamba create --name myenvname eternafold

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/eternafold:<tag>

   (see `eternafold/tags`_ for valid values for ``<tag>``)


.. |downloads_eternafold| image:: https://img.shields.io/conda/dn/bioconda/eternafold.svg?style=flat
   :target: https://anaconda.org/bioconda/eternafold
   :alt:   (downloads)
.. |docker_eternafold| image:: https://quay.io/repository/biocontainers/eternafold/status
   :target: https://quay.io/repository/biocontainers/eternafold
.. _`eternafold/tags`: https://quay.io/repository/biocontainers/eternafold?tab=tags


.. raw:: html

    <script>
        var package = "eternafold";
        var versions = ["1.3.1","1.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/eternafold/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/eternafold/README.html