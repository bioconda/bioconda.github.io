:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vamb'
.. highlight: bash

vamb
====

.. conda:recipe:: vamb
   :replaces_section_title:
   :noindex:

   Variational autoencoder for metagenomic binning

   :homepage: https://github.com/RasmussenLab/vamb
   :license: MIT / MIT License
   :recipe: /`vamb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vamb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vamb/meta.yaml>`_

   


.. conda:package:: vamb

   |downloads_vamb| |docker_vamb|

   :versions:
      
      

      ``3.0.2-1``,  ``3.0.2-0``,  ``3.0.1-1``,  ``3.0.1-0``,  ``2.1.0-0``,  ``2.0.1-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends numpy: ``>=1.15``
   :depends pysam: ``>=0.14``
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends pytorch-cpu: ``>=0.4``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install vamb

   and update with::

      conda update vamb

   or use the docker container::

      docker pull quay.io/biocontainers/vamb:<tag>

   (see `vamb/tags`_ for valid values for ``<tag>``)


.. |downloads_vamb| image:: https://img.shields.io/conda/dn/bioconda/vamb.svg?style=flat
   :target: https://anaconda.org/bioconda/vamb
   :alt:   (downloads)
.. |docker_vamb| image:: https://quay.io/repository/biocontainers/vamb/status
   :target: https://quay.io/repository/biocontainers/vamb
.. _`vamb/tags`: https://quay.io/repository/biocontainers/vamb?tab=tags


.. raw:: html

    <script>
        var package = "vamb";
        var versions = ["3.0.2","3.0.2","3.0.1","3.0.1","2.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vamb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vamb/README.html