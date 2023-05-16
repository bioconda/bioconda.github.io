:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ir'
.. highlight: bash

ir
==

.. conda:recipe:: ir
   :replaces_section_title:
   :noindex:

   Program for Calculating the Repetitiveness of DNA Sequences

   :homepage: http://guanine.evolbio.mpg.de/cgi-bin/ir/ir.cgi.pl
   :license: GPL2 / GPL-2
   :recipe: /`ir <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ir>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ir/meta.yaml>`_

   


.. conda:package:: ir

   |downloads_ir| |docker_ir|

   :versions:
      
      

      ``2.8.0-5``,  ``2.8.0-4``,  ``2.8.0-3``,  ``2.8.0-2``,  ``2.8.0-1``

      

   
   :depends libgcc-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ir

   and update with::

      conda update ir

   or use the docker container::

      docker pull quay.io/biocontainers/ir:<tag>

   (see `ir/tags`_ for valid values for ``<tag>``)


.. |downloads_ir| image:: https://img.shields.io/conda/dn/bioconda/ir.svg?style=flat
   :target: https://anaconda.org/bioconda/ir
   :alt:   (downloads)
.. |docker_ir| image:: https://quay.io/repository/biocontainers/ir/status
   :target: https://quay.io/repository/biocontainers/ir
.. _`ir/tags`: https://quay.io/repository/biocontainers/ir?tab=tags


.. raw:: html

    <script>
        var package = "ir";
        var versions = ["2.8.0","2.8.0","2.8.0","2.8.0","2.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ir/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ir/README.html