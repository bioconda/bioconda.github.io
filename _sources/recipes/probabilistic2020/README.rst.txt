:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'probabilistic2020'
.. highlight: bash

probabilistic2020
=================

.. conda:recipe:: probabilistic2020
   :replaces_section_title:
   :noindex:

   Simulates somatic mutations\, and calls statistically significant oncogenes and tumor suppressor genes based on a randomization\-based test

   :homepage: https://github.com/KarchinLab/probabilistic2020
   :license: APACHE / Apache-2-0
   :recipe: /`probabilistic2020 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/probabilistic2020>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/probabilistic2020/meta.yaml>`_

   


.. conda:package:: probabilistic2020

   |downloads_probabilistic2020| |docker_probabilistic2020|

   :versions:
      
      

      ``1.2.3-5``,  ``1.2.3-4``,  ``1.2.3-3``,  ``1.2.3-2``,  ``1.2.3-1``,  ``1.2.3-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends numpy: ``>=1.16.5,<2.0a0``
   :depends pandas: ``>=0.17.0``
   :depends pysam: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends scipy: ``<1.3.0``
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

      mamba install probabilistic2020

   and update with::

      mamba update probabilistic2020

  To create a new environment, run::

      mamba create --name myenvname probabilistic2020

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/probabilistic2020:<tag>

   (see `probabilistic2020/tags`_ for valid values for ``<tag>``)


.. |downloads_probabilistic2020| image:: https://img.shields.io/conda/dn/bioconda/probabilistic2020.svg?style=flat
   :target: https://anaconda.org/bioconda/probabilistic2020
   :alt:   (downloads)
.. |docker_probabilistic2020| image:: https://quay.io/repository/biocontainers/probabilistic2020/status
   :target: https://quay.io/repository/biocontainers/probabilistic2020
.. _`probabilistic2020/tags`: https://quay.io/repository/biocontainers/probabilistic2020?tab=tags


.. raw:: html

    <script>
        var package = "probabilistic2020";
        var versions = ["1.2.3","1.2.3","1.2.3","1.2.3","1.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/probabilistic2020/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/probabilistic2020/README.html