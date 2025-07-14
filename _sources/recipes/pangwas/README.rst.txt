:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pangwas'
.. highlight: bash

pangwas
=======

.. conda:recipe:: pangwas
   :replaces_section_title:
   :noindex:

   A pipeline for pangenome wide association studies \(panGWAS\).

   :homepage: https://github.com/phac-nml/pangwas
   :license: APACHE / Apache-2.0
   :recipe: /`pangwas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pangwas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pangwas/meta.yaml>`_

   


.. conda:package:: pangwas

   |downloads_pangwas| |docker_pangwas|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends bakta: ``1.9.2.*``
   :depends cairosvg: ``>=2.7.1``
   :depends dendropy: ``5.0.1.*``
   :depends diamond: ``2.1.8.*``
   :depends iqtree: ``2.3.6.*``
   :depends mafft: ``7.526.*``
   :depends mmseqs2: ``15.6f452.*``
   :depends ncbi-amrfinderplus: ``3.11.26.*``
   :depends networkx: ``3.4.2.*``
   :depends nextflow: ``>=24.10``
   :depends pip: 
   :depends pycairo: ``>=1.27.0``
   :depends pyseer: ``1.3.12.*``
   :depends python: 
   :depends svgpathtools: ``>=1.6.0``
   :depends tar: ``>=1.34``
   :depends tqdm: ``>=4.66``
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

      mamba install pangwas

   and update with::

      mamba update pangwas

  To create a new environment, run::

      mamba create --name myenvname pangwas

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pangwas:<tag>

   (see `pangwas/tags`_ for valid values for ``<tag>``)


.. |downloads_pangwas| image:: https://img.shields.io/conda/dn/bioconda/pangwas.svg?style=flat
   :target: https://anaconda.org/bioconda/pangwas
   :alt:   (downloads)
.. |docker_pangwas| image:: https://quay.io/repository/biocontainers/pangwas/status
   :target: https://quay.io/repository/biocontainers/pangwas
.. _`pangwas/tags`: https://quay.io/repository/biocontainers/pangwas?tab=tags


.. raw:: html

    <script>
        var package = "pangwas";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pangwas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pangwas/README.html