:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pydp'
.. highlight: bash

pydp
====

.. conda:recipe:: pydp
   :replaces_section_title:
   :noindex:

   PyDP is library for implementing Dirichlet Process mixture models \(DPMM\)

   :homepage: https://github.com/Roth-Lab/pydp/
   :license: GPL v3
   :recipe: /`pydp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pydp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pydp/meta.yaml>`_

   


.. conda:package:: pydp

   |downloads_pydp| |docker_pydp|

   :versions:
      
      

      ``0.2.4-0``

      

   
   :depends numba: 
   :depends numpy: 
   :depends python: ``<3``
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pydp

   and update with::

      conda update pydp

   or use the docker container::

      docker pull quay.io/biocontainers/pydp:<tag>

   (see `pydp/tags`_ for valid values for ``<tag>``)


.. |downloads_pydp| image:: https://img.shields.io/conda/dn/bioconda/pydp.svg?style=flat
   :target: https://anaconda.org/bioconda/pydp
   :alt:   (downloads)
.. |docker_pydp| image:: https://quay.io/repository/biocontainers/pydp/status
   :target: https://quay.io/repository/biocontainers/pydp
.. _`pydp/tags`: https://quay.io/repository/biocontainers/pydp?tab=tags


.. raw:: html

    <script>
        var package = "pydp";
        var versions = ["0.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pydp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pydp/README.html