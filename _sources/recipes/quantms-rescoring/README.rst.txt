:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'quantms-rescoring'
.. highlight: bash

quantms-rescoring
=================

.. conda:recipe:: quantms-rescoring
   :replaces_section_title:
   :noindex:

   PSM rescoring python package with scripts and helpers for the quantms workflow

   :homepage: https://www.github.com/bigbio/quantms-rescoring
   :license: Apache 2.0
   :recipe: /`quantms-rescoring <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quantms-rescoring>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quantms-rescoring/meta.yaml>`_

   


.. conda:package:: quantms-rescoring

   |downloads_quantms-rescoring| |docker_quantms-rescoring|

   :versions:
      
      

      ``0.0.7-0``,  ``0.0.6-0``,  ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.3-0``,  ``0.0.2-0``,  ``0.0.1-0``

      

   
   :depends click: 
   :depends deeplc: ``>=3.0``
   :depends ms2pip: ``>=4.0``
   :depends ms2rescore: ``3.1.4``
   :depends numpy: ``>=1.25``
   :depends pandas: 
   :depends protobuf: 
   :depends psm-utils: 
   :depends pygam: 
   :depends pyopenms: ``>=3.0``
   :depends python: ``>=3.9,<3.12``
   :depends scipy: 
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

      mamba install quantms-rescoring

   and update with::

      mamba update quantms-rescoring

  To create a new environment, run::

      mamba create --name myenvname quantms-rescoring

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/quantms-rescoring:<tag>

   (see `quantms-rescoring/tags`_ for valid values for ``<tag>``)


.. |downloads_quantms-rescoring| image:: https://img.shields.io/conda/dn/bioconda/quantms-rescoring.svg?style=flat
   :target: https://anaconda.org/bioconda/quantms-rescoring
   :alt:   (downloads)
.. |docker_quantms-rescoring| image:: https://quay.io/repository/biocontainers/quantms-rescoring/status
   :target: https://quay.io/repository/biocontainers/quantms-rescoring
.. _`quantms-rescoring/tags`: https://quay.io/repository/biocontainers/quantms-rescoring?tab=tags


.. raw:: html

    <script>
        var package = "quantms-rescoring";
        var versions = ["0.0.7","0.0.6","0.0.5","0.0.4","0.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/quantms-rescoring/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/quantms-rescoring/README.html