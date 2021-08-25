:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deblur'
.. highlight: bash

deblur
======

.. conda:recipe:: deblur
   :replaces_section_title:
   :noindex:

   Deblur is a greedy deconvolution algorithm based on known read error profiles.

   :homepage: https://github.com/biocore/deblur
   :license: BSD license
   :recipe: /`deblur <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deblur>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deblur/meta.yaml>`_

   


.. conda:package:: deblur

   |downloads_deblur| |docker_deblur|

   :versions:
      
      

      ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.4-2``,  ``1.0.4-1``,  ``1.0.4-0``

      

   
   :depends biom-format: 
   :depends click: 
   :depends h5py: 
   :depends mafft: ``>=7.394``
   :depends python: ``>=3``
   :depends scikit-bio: ``>=0.5.0``
   :depends sortmerna: ``2.0``
   :depends vsearch: ``>=2.0.3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install deblur

   and update with::

      conda update deblur

   or use the docker container::

      docker pull quay.io/biocontainers/deblur:<tag>

   (see `deblur/tags`_ for valid values for ``<tag>``)


.. |downloads_deblur| image:: https://img.shields.io/conda/dn/bioconda/deblur.svg?style=flat
   :target: https://anaconda.org/bioconda/deblur
   :alt:   (downloads)
.. |docker_deblur| image:: https://quay.io/repository/biocontainers/deblur/status
   :target: https://quay.io/repository/biocontainers/deblur
.. _`deblur/tags`: https://quay.io/repository/biocontainers/deblur?tab=tags


.. raw:: html

    <script>
        var package = "deblur";
        var versions = ["1.1.0","1.1.0","1.1.0","1.0.4","1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deblur/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deblur/README.html