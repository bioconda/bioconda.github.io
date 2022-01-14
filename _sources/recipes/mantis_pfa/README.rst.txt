:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mantis_pfa'
.. highlight: bash

mantis_pfa
==========

.. conda:recipe:: mantis_pfa
   :replaces_section_title:
   :noindex:

   Consensus\-driven protein function annotation tool

   :homepage: https://github.com/PedroMTQ/Mantis
   :license: MIT / MIT
   :recipe: /`mantis_pfa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mantis_pfa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mantis_pfa/meta.yaml>`_
   :links: biotools: :biotools:`mantis_pfa`, doi: :doi:`10.1093/gigascience/giab042`

   Mantis is a fully customizable protein function annotation\,
   that dynamically integrates multiple reference databases to
   produce consensus\-driven annotations.



.. conda:package:: mantis_pfa

   |downloads_mantis_pfa| |docker_mantis_pfa|

   :versions:
      
      

      ``1.4.4-0``,  ``1.4.3-0``

      

   
   :depends cython: 
   :depends diamond: ``>=2.0.13``
   :depends hmmer: ``>=3.2.1``
   :depends libgcc-ng: ``>=9.4.0``
   :depends nltk: ``>=1.18.1``
   :depends numpy: 
   :depends psutil: ``>=5.6.7``
   :depends python: ``>=3.7,<3.8.0a0``
   :depends python_abi: ``3.7.* *_cp37m``
   :depends requests: ``>=2.22.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mantis_pfa

   and update with::

      conda update mantis_pfa

   or use the docker container::

      docker pull quay.io/biocontainers/mantis_pfa:<tag>

   (see `mantis_pfa/tags`_ for valid values for ``<tag>``)


.. |downloads_mantis_pfa| image:: https://img.shields.io/conda/dn/bioconda/mantis_pfa.svg?style=flat
   :target: https://anaconda.org/bioconda/mantis_pfa
   :alt:   (downloads)
.. |docker_mantis_pfa| image:: https://quay.io/repository/biocontainers/mantis_pfa/status
   :target: https://quay.io/repository/biocontainers/mantis_pfa
.. _`mantis_pfa/tags`: https://quay.io/repository/biocontainers/mantis_pfa?tab=tags


.. raw:: html

    <script>
        var package = "mantis_pfa";
        var versions = ["1.4.4","1.4.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mantis_pfa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mantis_pfa/README.html