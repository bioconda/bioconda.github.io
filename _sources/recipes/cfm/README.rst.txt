:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cfm'
.. highlight: bash

cfm
===

.. conda:recipe:: cfm
   :replaces_section_title:
   :noindex:

   Tools for applying Competitive Fragmentation Modeling \(CFM\) to spectrum prediction and metabolite identification tasks\, as well as a tools for fragment generation and peak annotation.

   :homepage: https://sourceforge.net/p/cfm-id/wiki/Home/
   :license: GPL-2
   :recipe: /`cfm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cfm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cfm/meta.yaml>`_

   


.. conda:package:: cfm

   |downloads_cfm| |docker_cfm|

   :versions:
      
      

      ``33-3``,  ``33-2``,  ``33-1``,  ``33-0``

      

   
   :depends boost-cpp: ``>=1.68.0,<1.68.1.0a0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends liblbfgs: ``>=1.10,<1.11.0a0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends lp_solve: ``5.5.*``
   :depends mpich: ``>=3.4.3,<4.0a0``
   :depends rdkit: ``2018.09.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cfm

   and update with::

      conda update cfm

   or use the docker container::

      docker pull quay.io/biocontainers/cfm:<tag>

   (see `cfm/tags`_ for valid values for ``<tag>``)


.. |downloads_cfm| image:: https://img.shields.io/conda/dn/bioconda/cfm.svg?style=flat
   :target: https://anaconda.org/bioconda/cfm
   :alt:   (downloads)
.. |docker_cfm| image:: https://quay.io/repository/biocontainers/cfm/status
   :target: https://quay.io/repository/biocontainers/cfm
.. _`cfm/tags`: https://quay.io/repository/biocontainers/cfm?tab=tags


.. raw:: html

    <script>
        var package = "cfm";
        var versions = ["33","33","33","33"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cfm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cfm/README.html