:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'crispector'
.. highlight: bash

crispector
==========

.. conda:recipe:: crispector
   :replaces_section_title:
   :noindex:

   Accurate estimation of off\-target editing activity from comparative NGS data

   :homepage: https://github.com/YakhiniGroup/crispector
   :license: free to academic and non-for-profit research work, non-commercial use, see LICENSE file
   :recipe: /`crispector <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crispector>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crispector/meta.yaml>`_

   


.. conda:package:: crispector

   |downloads_crispector| |docker_crispector|

   :versions:
      
      

      ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2b9-0``,  ``1.0.2b7-0``,  ``1.0.2b6-0``

      

   
   :depends biopython: ``>=1.74``
   :depends click: ``>=7.0``
   :depends fastp: 
   :depends jinja2: 
   :depends matplotlib-base: ``>=3.1.2``
   :depends numpy: ``>=1.12.1``
   :depends pandas: ``>=0.24.2``
   :depends plotly: ``>=4.3.0``
   :depends python: ``3.7.*``
   :depends python-edlib: 
   :depends pyyaml: ``>=5.1.2``
   :depends scipy: ``>=1.2.1``
   :depends seaborn: ``>=0.9.0``
   :depends statsmodels: 
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

      mamba install crispector

   and update with::

      mamba update crispector

  To create a new environment, run::

      mamba create --name myenvname crispector

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/crispector:<tag>

   (see `crispector/tags`_ for valid values for ``<tag>``)


.. |downloads_crispector| image:: https://img.shields.io/conda/dn/bioconda/crispector.svg?style=flat
   :target: https://anaconda.org/bioconda/crispector
   :alt:   (downloads)
.. |docker_crispector| image:: https://quay.io/repository/biocontainers/crispector/status
   :target: https://quay.io/repository/biocontainers/crispector
.. _`crispector/tags`: https://quay.io/repository/biocontainers/crispector?tab=tags


.. raw:: html

    <script>
        var package = "crispector";
        var versions = ["1.0.4","1.0.3","1.0.2b9","1.0.2b7","1.0.2b6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/crispector/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/crispector/README.html