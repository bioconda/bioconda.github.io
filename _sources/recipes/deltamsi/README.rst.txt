:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deltamsi'
.. highlight: bash

deltamsi
========

.. conda:recipe:: deltamsi
   :replaces_section_title:
   :noindex:

   DeltaMSI\: AI\-based modeling of microsatellite instability scoring on NGS data

   :homepage: https://github.com/RADar-AZDelta/DeltaMSI
   :license: GNU General Public License v3.0
   :recipe: /`deltamsi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deltamsi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deltamsi/meta.yaml>`_

   


.. conda:package:: deltamsi

   |downloads_deltamsi| |docker_deltamsi|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends matplotlib-base: 
   :depends numpy: ``>=1.21.2``
   :depends openpyxl: 
   :depends pandas: 
   :depends pysam: ``>=0.15.3``
   :depends python: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends seaborn: 
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

      mamba install deltamsi

   and update with::

      mamba update deltamsi

  To create a new environment, run::

      mamba create --name myenvname deltamsi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/deltamsi:<tag>

   (see `deltamsi/tags`_ for valid values for ``<tag>``)


.. |downloads_deltamsi| image:: https://img.shields.io/conda/dn/bioconda/deltamsi.svg?style=flat
   :target: https://anaconda.org/bioconda/deltamsi
   :alt:   (downloads)
.. |docker_deltamsi| image:: https://quay.io/repository/biocontainers/deltamsi/status
   :target: https://quay.io/repository/biocontainers/deltamsi
.. _`deltamsi/tags`: https://quay.io/repository/biocontainers/deltamsi?tab=tags


.. raw:: html

    <script>
        var package = "deltamsi";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deltamsi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deltamsi/README.html