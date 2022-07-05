:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scte'
.. highlight: bash

scte
====

.. conda:recipe:: scte
   :replaces_section_title:
   :noindex:

   scTE builds genome indices for the fast alignment of reads to genes and TEs. 


   :homepage: https://github.com/JiekaiLab/scTE
   :license: MIT license
   :recipe: /`scte <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scte>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scte/meta.yaml>`_

   


.. conda:package:: scte

   |downloads_scte| |docker_scte|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends anndata: 
   :depends argparse: 
   :depends h5py: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.6``
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install scte

   and update with::

      conda update scte

   or use the docker container::

      docker pull quay.io/biocontainers/scte:<tag>

   (see `scte/tags`_ for valid values for ``<tag>``)


.. |downloads_scte| image:: https://img.shields.io/conda/dn/bioconda/scte.svg?style=flat
   :target: https://anaconda.org/bioconda/scte
   :alt:   (downloads)
.. |docker_scte| image:: https://quay.io/repository/biocontainers/scte/status
   :target: https://quay.io/repository/biocontainers/scte
.. _`scte/tags`: https://quay.io/repository/biocontainers/scte?tab=tags


.. raw:: html

    <script>
        var package = "scte";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scte/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scte/README.html