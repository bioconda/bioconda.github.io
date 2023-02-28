:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'staphopia-sccmec'
.. highlight: bash

staphopia-sccmec
================

.. conda:recipe:: staphopia-sccmec
   :replaces_section_title:
   :noindex:

   Predicts Staphylococcus aureus SCCmec type based on primers.

   :homepage: https://github.com/staphopia/staphopia-sccmec
   :license: MIT
   :recipe: /`staphopia-sccmec <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/staphopia-sccmec>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/staphopia-sccmec/meta.yaml>`_
   :links: biotools: :biotools:`Staphopia`, doi: :doi:`10.7717/peerj.5261`

   


.. conda:package:: staphopia-sccmec

   |downloads_staphopia-sccmec| |docker_staphopia-sccmec|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends blast: 
   :depends executor: 
   :depends python: ``>=3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install staphopia-sccmec

   and update with::

      conda update staphopia-sccmec

   or use the docker container::

      docker pull quay.io/biocontainers/staphopia-sccmec:<tag>

   (see `staphopia-sccmec/tags`_ for valid values for ``<tag>``)


.. |downloads_staphopia-sccmec| image:: https://img.shields.io/conda/dn/bioconda/staphopia-sccmec.svg?style=flat
   :target: https://anaconda.org/bioconda/staphopia-sccmec
   :alt:   (downloads)
.. |docker_staphopia-sccmec| image:: https://quay.io/repository/biocontainers/staphopia-sccmec/status
   :target: https://quay.io/repository/biocontainers/staphopia-sccmec
.. _`staphopia-sccmec/tags`: https://quay.io/repository/biocontainers/staphopia-sccmec?tab=tags


.. raw:: html

    <script>
        var package = "staphopia-sccmec";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/staphopia-sccmec/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/staphopia-sccmec/README.html