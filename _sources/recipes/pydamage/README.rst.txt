:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pydamage'
.. highlight: bash

pydamage
========

.. conda:recipe:: pydamage
   :replaces_section_title:
   :noindex:

   Damage parameter estimation for ancient DNA

   :homepage: https://github.com/maxibor/pydamage
   :license: GPL-3.0
   :recipe: /`pydamage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pydamage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pydamage/meta.yaml>`_

   


.. conda:package:: pydamage

   |downloads_pydamage| |docker_pydamage|

   :versions:
      
      

      ``0.70-1``,  ``0.70-0``,  ``0.62-0``,  ``0.61-0``,  ``0.60-1``,  ``0.60-0``,  ``0.7-0``

      

   
   :depends biopython: 
   :depends click: 
   :depends kneed: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends pysam: ``>=0.13.0``
   :depends python: ``>=3.6``
   :depends scipy: 
   :depends statsmodels: 
   :depends tqdm: 
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

      mamba install pydamage

   and update with::

      mamba update pydamage

  To create a new environment, run::

      mamba create --name myenvname pydamage

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pydamage:<tag>

   (see `pydamage/tags`_ for valid values for ``<tag>``)


.. |downloads_pydamage| image:: https://img.shields.io/conda/dn/bioconda/pydamage.svg?style=flat
   :target: https://anaconda.org/bioconda/pydamage
   :alt:   (downloads)
.. |docker_pydamage| image:: https://quay.io/repository/biocontainers/pydamage/status
   :target: https://quay.io/repository/biocontainers/pydamage
.. _`pydamage/tags`: https://quay.io/repository/biocontainers/pydamage?tab=tags


.. raw:: html

    <script>
        var package = "pydamage";
        var versions = ["0.70","0.70","0.62","0.61","0.60"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pydamage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pydamage/README.html