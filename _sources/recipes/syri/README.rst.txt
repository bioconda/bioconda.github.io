:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'syri'
.. highlight: bash

syri
====

.. conda:recipe:: syri
   :replaces_section_title:
   :noindex:

   Synteny and rearrangement identifier between whole\-genome assemblies

   :homepage: https://github.com/schneebergerlab/syri
   :license: MIT License
   :recipe: /`syri <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/syri>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/syri/meta.yaml>`_

   


.. conda:package:: syri

   |downloads_syri| |docker_syri|

   :versions:
      
      

      ``1.6.3-2``,  ``1.6.3-1``,  ``1.6.3-0``,  ``1.6-1``,  ``1.6-0``,  ``1.5.4-0``,  ``1.5.3-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends longestrunsubsequence: 
   :depends mummer4: 
   :depends numpy: ``>=1.21.2``
   :depends numpy: ``>=1.24.4,<2.0a0``
   :depends pandas: ``>=1.2.4``
   :depends psutil: ``>=5.8``
   :depends pulp: 
   :depends pysam: ``>=0.16.0.1``
   :depends python: ``>=3.8,<3.9.0a0``
   :depends python-igraph: ``>=0.9.1``
   :depends python_abi: ``3.8.* *_cp38``
   :depends scipy: ``>=1.6.2``
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

      mamba install syri

   and update with::

      mamba update syri

  To create a new environment, run::

      mamba create --name myenvname syri

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/syri:<tag>

   (see `syri/tags`_ for valid values for ``<tag>``)


.. |downloads_syri| image:: https://img.shields.io/conda/dn/bioconda/syri.svg?style=flat
   :target: https://anaconda.org/bioconda/syri
   :alt:   (downloads)
.. |docker_syri| image:: https://quay.io/repository/biocontainers/syri/status
   :target: https://quay.io/repository/biocontainers/syri
.. _`syri/tags`: https://quay.io/repository/biocontainers/syri?tab=tags


.. raw:: html

    <script>
        var package = "syri";
        var versions = ["1.6.3","1.6.3","1.6.3","1.6","1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/syri/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/syri/README.html