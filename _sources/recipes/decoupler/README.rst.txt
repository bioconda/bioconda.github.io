:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'decoupler'
.. highlight: bash

decoupler
=========

.. conda:recipe:: decoupler
   :replaces_section_title:
   :noindex:

   Ensemble of methods to infer biological activities from omics data

   :homepage: https://github.com/saezlab/decoupler-py
   :license: GPL-3.0
   :recipe: /`decoupler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/decoupler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/decoupler/meta.yaml>`_

   


.. conda:package:: decoupler

   |downloads_decoupler| |docker_decoupler|

   :versions:
      
      

      ``1.4.0-0``

      

   
   :depends anndata: 
   :depends numba: 
   :depends python: ``>=3.6``
   :depends tqdm: 
   :depends typing-extensions: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install decoupler

   and update with::

      conda update decoupler

   or use the docker container::

      docker pull quay.io/biocontainers/decoupler:<tag>

   (see `decoupler/tags`_ for valid values for ``<tag>``)


.. |downloads_decoupler| image:: https://img.shields.io/conda/dn/bioconda/decoupler.svg?style=flat
   :target: https://anaconda.org/bioconda/decoupler
   :alt:   (downloads)
.. |docker_decoupler| image:: https://quay.io/repository/biocontainers/decoupler/status
   :target: https://quay.io/repository/biocontainers/decoupler
.. _`decoupler/tags`: https://quay.io/repository/biocontainers/decoupler?tab=tags


.. raw:: html

    <script>
        var package = "decoupler";
        var versions = ["1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/decoupler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/decoupler/README.html