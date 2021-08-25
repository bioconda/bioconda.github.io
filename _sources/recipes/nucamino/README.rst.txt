:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nucamino'
.. highlight: bash

nucamino
========

.. conda:recipe:: nucamino
   :replaces_section_title:
   :noindex:

   A nucleotide to amino acid alignment program optimized for virus gene sequences

   :homepage: https://github.com/hivdb/nucamino
   :license: MIT
   :recipe: /`nucamino <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nucamino>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nucamino/meta.yaml>`_

   


.. conda:package:: nucamino

   |downloads_nucamino| |docker_nucamino|

   :versions:
      
      

      ``0.1.3-2``,  ``0.1.3-1``,  ``0.1.3-0``

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nucamino

   and update with::

      conda update nucamino

   or use the docker container::

      docker pull quay.io/biocontainers/nucamino:<tag>

   (see `nucamino/tags`_ for valid values for ``<tag>``)


.. |downloads_nucamino| image:: https://img.shields.io/conda/dn/bioconda/nucamino.svg?style=flat
   :target: https://anaconda.org/bioconda/nucamino
   :alt:   (downloads)
.. |docker_nucamino| image:: https://quay.io/repository/biocontainers/nucamino/status
   :target: https://quay.io/repository/biocontainers/nucamino
.. _`nucamino/tags`: https://quay.io/repository/biocontainers/nucamino?tab=tags


.. raw:: html

    <script>
        var package = "nucamino";
        var versions = ["0.1.3","0.1.3","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nucamino/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nucamino/README.html