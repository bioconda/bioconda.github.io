:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'crispector2'
.. highlight: bash

crispector2
===========

.. conda:recipe:: crispector2
   :replaces_section_title:
   :noindex:

   Accurate estimation of off\-target editing activity from comparative NGS data

   :homepage: https://github.com/theAguy/crispector2
   :license: free to academic and non-for-profit research work, non-commercial use, see LICENSE file
   :recipe: /`crispector2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crispector2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crispector2/meta.yaml>`_

   


.. conda:package:: crispector2

   |downloads_crispector2| |docker_crispector2|

   :versions:
      
      

      ``2.1.2-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.8-0``,  ``2.0.7-0``,  ``2.0.6-0``,  ``2.0.4-0``

      

   
   :depends biopython: ``>=1.74,<=1.79``
   :depends click: ``>=7.0``
   :depends fastp: 
   :depends jinja2: 
   :depends matplotlib-base: ``>=3.1.2``
   :depends mpmath: 
   :depends numpy: ``>=1.12.1``
   :depends pandas: ``>=0.24.2``
   :depends plotly: ``>=4.3.0``
   :depends python: ``>=3.8``
   :depends python-edlib: 
   :depends pyyaml: ``>=5.1.2``
   :depends scipy: ``>=1.2.1``
   :depends seaborn: ``>=0.9.0``
   :depends statsmodels: 
   :depends tqdm: ``>=4.66.0``
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

      mamba install crispector2

   and update with::

      mamba update crispector2

  To create a new environment, run::

      mamba create --name myenvname crispector2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/crispector2:<tag>

   (see `crispector2/tags`_ for valid values for ``<tag>``)


.. |downloads_crispector2| image:: https://img.shields.io/conda/dn/bioconda/crispector2.svg?style=flat
   :target: https://anaconda.org/bioconda/crispector2
   :alt:   (downloads)
.. |docker_crispector2| image:: https://quay.io/repository/biocontainers/crispector2/status
   :target: https://quay.io/repository/biocontainers/crispector2
.. _`crispector2/tags`: https://quay.io/repository/biocontainers/crispector2?tab=tags


.. raw:: html

    <script>
        var package = "crispector2";
        var versions = ["2.1.2","2.1.1","2.1.0","2.0.8","2.0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/crispector2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/crispector2/README.html