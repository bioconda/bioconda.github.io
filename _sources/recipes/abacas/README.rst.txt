:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'abacas'
.. highlight: bash

abacas
======

.. conda:recipe:: abacas
   :replaces_section_title:
   :noindex:

   ABACAS is intended to rapidly contiguate \(align\, order\, orientate\)\, visualize and design primers to close gaps on shotgun assembled contigs based on a reference sequence.

   :homepage: http://abacas.sourceforge.net/
   :documentation: http://abacas.sourceforge.net/documentation.html
   
   :license: GPL / GPL-2.0-or-later
   :recipe: /`abacas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abacas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abacas/meta.yaml>`_

   


.. conda:package:: abacas

   |downloads_abacas| |docker_abacas|

   :versions:
      
      

      ``1.3.1-2``,  ``1.3.1-1``,  ``1.3.1-0``

      

   
   :depends mummer: 
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install abacas

   and update with::

      conda update abacas

   or use the docker container::

      docker pull quay.io/biocontainers/abacas:<tag>

   (see `abacas/tags`_ for valid values for ``<tag>``)


.. |downloads_abacas| image:: https://img.shields.io/conda/dn/bioconda/abacas.svg?style=flat
   :target: https://anaconda.org/bioconda/abacas
   :alt:   (downloads)
.. |docker_abacas| image:: https://quay.io/repository/biocontainers/abacas/status
   :target: https://quay.io/repository/biocontainers/abacas
.. _`abacas/tags`: https://quay.io/repository/biocontainers/abacas?tab=tags


.. raw:: html

    <script>
        var package = "abacas";
        var versions = ["1.3.1","1.3.1","1.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/abacas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/abacas/README.html