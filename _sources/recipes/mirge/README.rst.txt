:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mirge'
.. highlight: bash

mirge
=====

.. conda:recipe:: mirge
   :replaces_section_title:
   :noindex:

   comprehensive analysis of miRNA sequencing data

   :homepage: https://github.com/mhalushka/miRge
   :license: MIT License
   :recipe: /`mirge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirge/meta.yaml>`_

   


.. conda:package:: mirge

   |downloads_mirge| |docker_mirge|

   :versions:
      
      

      ``2.0.6-6``,  ``2.0.6-5``,  ``2.0.6-4``,  ``2.0.5-3``,  ``2.0.4-2``,  ``2.0.3-0``,  ``2.0-0``

      

   
   :depends biopython: ``>=1.68``
   :depends cutadapt: ``1.16``
   :depends matplotlib: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``<3``
   :depends reportlab: 
   :depends scikit-learn: 
   :depends scipy: 
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

      mamba install mirge

   and update with::

      mamba update mirge

  To create a new environment, run::

      mamba create --name myenvname mirge

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mirge:<tag>

   (see `mirge/tags`_ for valid values for ``<tag>``)


.. |downloads_mirge| image:: https://img.shields.io/conda/dn/bioconda/mirge.svg?style=flat
   :target: https://anaconda.org/bioconda/mirge
   :alt:   (downloads)
.. |docker_mirge| image:: https://quay.io/repository/biocontainers/mirge/status
   :target: https://quay.io/repository/biocontainers/mirge
.. _`mirge/tags`: https://quay.io/repository/biocontainers/mirge?tab=tags


.. raw:: html

    <script>
        var package = "mirge";
        var versions = ["2.0.6","2.0.6","2.0.6","2.0.5","2.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mirge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mirge/README.html