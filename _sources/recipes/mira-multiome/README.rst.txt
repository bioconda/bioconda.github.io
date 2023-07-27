:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mira-multiome'
.. highlight: bash

mira-multiome
=============

.. conda:recipe:: mira-multiome
   :replaces_section_title:
   :noindex:

   Single\-cell multiomics data analysis

   :homepage: https://mira-multiome.readthedocs.io/en/latest/
   :license: BSD-3-Clause-LBNL
   :recipe: /`mira-multiome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mira-multiome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mira-multiome/meta.yaml>`_

   


.. conda:package:: mira-multiome

   |downloads_mira-multiome| |docker_mira-multiome|

   :versions:
      
      

      ``2.1.0-0``

      

   
   :depends anndata: ``<1,>=0.7.6``
   :depends lisa2: ``>=2.3.0``
   :depends matplotlib-base: ``<4,>=3.4``
   :depends moods: ``>=1.9.4.1``
   :depends networkx: ``<3,>=2.3``
   :depends optuna: ``<3,>=2.8``
   :depends pyfaidx: ``<1,>=0.5``
   :depends pyro-ppl: ``<2,>=1.5.2``
   :depends python: ``>=3.7``
   :depends pytorch: ``<2,>=1.8.0``
   :depends requests: ``<3,>=2``
   :depends tensorboard: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mira-multiome

   and update with::

      conda update mira-multiome

   or use the docker container::

      docker pull quay.io/biocontainers/mira-multiome:<tag>

   (see `mira-multiome/tags`_ for valid values for ``<tag>``)


.. |downloads_mira-multiome| image:: https://img.shields.io/conda/dn/bioconda/mira-multiome.svg?style=flat
   :target: https://anaconda.org/bioconda/mira-multiome
   :alt:   (downloads)
.. |docker_mira-multiome| image:: https://quay.io/repository/biocontainers/mira-multiome/status
   :target: https://quay.io/repository/biocontainers/mira-multiome
.. _`mira-multiome/tags`: https://quay.io/repository/biocontainers/mira-multiome?tab=tags


.. raw:: html

    <script>
        var package = "mira-multiome";
        var versions = ["2.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mira-multiome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mira-multiome/README.html