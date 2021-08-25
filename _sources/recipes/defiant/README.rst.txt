:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'defiant'
.. highlight: bash

defiant
=======

.. conda:recipe:: defiant
   :replaces_section_title:
   :noindex:

   Differential methylation\, Easy\, Fast\, Identification and ANnoTation.

   :homepage: https://github.com/hhg7/defiant
   :license: GPL / GPL-2.0
   :recipe: /`defiant <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/defiant>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/defiant/meta.yaml>`_

   


.. conda:package:: defiant

   |downloads_defiant| |docker_defiant|

   :versions:
      
      

      ``1.1.4-2``,  ``1.1.4-1``,  ``1.1.4-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc-ng: ``>=9.3.0``
   :depends mpc: ``>=1.1.0,<2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install defiant

   and update with::

      conda update defiant

   or use the docker container::

      docker pull quay.io/biocontainers/defiant:<tag>

   (see `defiant/tags`_ for valid values for ``<tag>``)


.. |downloads_defiant| image:: https://img.shields.io/conda/dn/bioconda/defiant.svg?style=flat
   :target: https://anaconda.org/bioconda/defiant
   :alt:   (downloads)
.. |docker_defiant| image:: https://quay.io/repository/biocontainers/defiant/status
   :target: https://quay.io/repository/biocontainers/defiant
.. _`defiant/tags`: https://quay.io/repository/biocontainers/defiant?tab=tags


.. raw:: html

    <script>
        var package = "defiant";
        var versions = ["1.1.4","1.1.4","1.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/defiant/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/defiant/README.html