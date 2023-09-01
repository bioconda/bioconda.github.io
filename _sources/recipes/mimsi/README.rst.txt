:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mimsi'
.. highlight: bash

mimsi
=====

.. conda:recipe:: mimsi
   :replaces_section_title:
   :noindex:

   A Deep Mulitple Instance Learning Classifier for Microsatellite Instability

   :homepage: https://github.com/mskcc/mimsi
   :license: GNU GPL v3.0
   :recipe: /`mimsi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mimsi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mimsi/meta.yaml>`_

   


.. conda:package:: mimsi

   |downloads_mimsi| |docker_mimsi|

   :versions:
      
      

      ``0.4.4-0``,  ``0.4.3-0``

      

   
   :depends matplotlib-base: 
   :depends nose: ``>=1.3.7``
   :depends numpy: 
   :depends pandas: 
   :depends pysam: 
   :depends python: ``>=3.6,<3.9``
   :depends pytorch: 
   :depends scikit-learn: 
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

      mamba install mimsi

   and update with::

      mamba update mimsi

  To create a new environment, run::

      mamba create --name myenvname mimsi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mimsi:<tag>

   (see `mimsi/tags`_ for valid values for ``<tag>``)


.. |downloads_mimsi| image:: https://img.shields.io/conda/dn/bioconda/mimsi.svg?style=flat
   :target: https://anaconda.org/bioconda/mimsi
   :alt:   (downloads)
.. |docker_mimsi| image:: https://quay.io/repository/biocontainers/mimsi/status
   :target: https://quay.io/repository/biocontainers/mimsi
.. _`mimsi/tags`: https://quay.io/repository/biocontainers/mimsi?tab=tags


.. raw:: html

    <script>
        var package = "mimsi";
        var versions = ["0.4.4","0.4.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mimsi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mimsi/README.html