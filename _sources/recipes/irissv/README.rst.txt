:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'irissv'
.. highlight: bash

irissv
======

.. conda:recipe:: irissv
   :replaces_section_title:
   :noindex:

   Software for refining insertion sequences in structural variant calls

   :homepage: https://github.com/mkirsche/Iris
   :license: MIT
   :recipe: /`irissv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/irissv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/irissv/meta.yaml>`_
   :links: usegalaxy-eu: :usegalaxy-eu:`irissv`

   


.. conda:package:: irissv

   |downloads_irissv| |docker_irissv|

   :versions:
      
      

      ``1.0.4-2``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-1``,  ``1.0.3-0``

      

   
   :depends minimap2: 
   :depends openjdk: ``>=11.0.1``
   :depends racon: 
   :depends samtools: ``>=1.9.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install irissv

   and update with::

      conda update irissv

   or use the docker container::

      docker pull quay.io/biocontainers/irissv:<tag>

   (see `irissv/tags`_ for valid values for ``<tag>``)


.. |downloads_irissv| image:: https://img.shields.io/conda/dn/bioconda/irissv.svg?style=flat
   :target: https://anaconda.org/bioconda/irissv
   :alt:   (downloads)
.. |docker_irissv| image:: https://quay.io/repository/biocontainers/irissv/status
   :target: https://quay.io/repository/biocontainers/irissv
.. _`irissv/tags`: https://quay.io/repository/biocontainers/irissv?tab=tags


.. raw:: html

    <script>
        var package = "irissv";
        var versions = ["1.0.4","1.0.4","1.0.4","1.0.3","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/irissv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/irissv/README.html