:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genoboo'
.. highlight: bash

genoboo
=======

.. conda:recipe:: genoboo
   :replaces_section_title:
   :noindex:

   A collaborative notebook for comparative genomics \(active fork of GeneNoteBook\)

   :homepage: https://github.com/gogepp/genoboo
   :license: AGPL-3.0
   :recipe: /`genoboo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genoboo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genoboo/meta.yaml>`_

   


.. conda:package:: genoboo

   |downloads_genoboo| |docker_genoboo|

   :versions:
      
      

      ``0.4.0-0``

      

   
   :depends blast: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends mongodb: ``>=5.0``
   :depends nodejs: ``>=15,<16``
   :depends nodejs: ``>=15.14.0,<16.0a0``
   :depends python_abi: ``3.11.* *_cp311``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install genoboo

   and update with::

      conda update genoboo

   or use the docker container::

      docker pull quay.io/biocontainers/genoboo:<tag>

   (see `genoboo/tags`_ for valid values for ``<tag>``)


.. |downloads_genoboo| image:: https://img.shields.io/conda/dn/bioconda/genoboo.svg?style=flat
   :target: https://anaconda.org/bioconda/genoboo
   :alt:   (downloads)
.. |docker_genoboo| image:: https://quay.io/repository/biocontainers/genoboo/status
   :target: https://quay.io/repository/biocontainers/genoboo
.. _`genoboo/tags`: https://quay.io/repository/biocontainers/genoboo?tab=tags


.. raw:: html

    <script>
        var package = "genoboo";
        var versions = ["0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genoboo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genoboo/README.html