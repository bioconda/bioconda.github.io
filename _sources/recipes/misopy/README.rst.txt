:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'misopy'
.. highlight: bash

misopy
======

.. conda:recipe:: misopy
   :replaces_section_title:
   :noindex:

   Mixture of Isoforms model \(MISO\) for isoform quantitation using RNA\-Seq

   :homepage: http://genes.mit.edu/burgelab/miso/
   :license: GPL2 / GPL2
   :recipe: /`misopy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/misopy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/misopy/meta.yaml>`_

   


.. conda:package:: misopy

   |downloads_misopy| |docker_misopy|

   :versions:
      
      

      ``0.5.4-5``,  ``0.5.4-4``,  ``0.5.4-3``,  ``0.5.4-2``,  ``0.5.4-1``,  ``0.5.4-0``

      

   
   :depends bedtools: 
   :depends libgcc-ng: ``>=10.3.0``
   :depends matplotlib: 
   :depends numpy: ``>=1.5.0``
   :depends pysam: ``>=0.6.0``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends samtools: ``<=1.2``
   :depends scipy: ``>=0.9.0``
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

      mamba install misopy

   and update with::

      mamba update misopy

  To create a new environment, run::

      mamba create --name myenvname misopy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/misopy:<tag>

   (see `misopy/tags`_ for valid values for ``<tag>``)


.. |downloads_misopy| image:: https://img.shields.io/conda/dn/bioconda/misopy.svg?style=flat
   :target: https://anaconda.org/bioconda/misopy
   :alt:   (downloads)
.. |docker_misopy| image:: https://quay.io/repository/biocontainers/misopy/status
   :target: https://quay.io/repository/biocontainers/misopy
.. _`misopy/tags`: https://quay.io/repository/biocontainers/misopy?tab=tags


.. raw:: html

    <script>
        var package = "misopy";
        var versions = ["0.5.4","0.5.4","0.5.4","0.5.4","0.5.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/misopy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/misopy/README.html