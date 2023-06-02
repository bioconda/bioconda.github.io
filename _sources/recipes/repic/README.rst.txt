:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'repic'
.. highlight: bash

repic
=====

.. conda:recipe:: repic
   :replaces_section_title:
   :noindex:

   REPIC \- an ensemble learning approach to cryo\-EM particle picking.

   :homepage: https://github.com/ccameron/REPIC
   :license: BSD / BSD-3-Clause
   :recipe: /`repic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/repic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/repic/meta.yaml>`_

   REPIC is an ensemble learning approach to cryogenic\-electron\\ \\ microscopy \(cryo\-EM\) particle picking. It identifies particles common to\\ \\ multiple picked particle sets \(i.e.\, consensus particles\) using graph\\ \\ theory and integer linear programming \(ILP\). Picked particle sets may be\\ \\ found by a human specialist \(manual\)\, template matching\, mathematical\\ \\ function \(e.g.\, RELION\'s Laplacian\-of\-Gaussian auto\-picking\)\, or\\ \\ machine\-learning method. REPIC expects particle sets to be in BOX file\\ \\ format \(\*.box\) and contain particle coordinates\, detection box size \(in\\ \\ pixels\)\, and \(optional\) score \[0\-1\].


.. conda:package:: repic

   |downloads_repic| |docker_repic|

   :versions:
      
      

      ``0.0.0-0``

      

   
   :depends matplotlib-base: ``>=3.2.2``
   :depends mrcfile: ``>=1.4.3``
   :depends networkx: ``>=2.8.4``
   :depends numpy: ``>=1.24.2``
   :depends pandas: 
   :depends python: 
   :depends scipy: ``>=1.10.0``
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install repic

   and update with::

      conda update repic

   or use the docker container::

      docker pull quay.io/biocontainers/repic:<tag>

   (see `repic/tags`_ for valid values for ``<tag>``)


.. |downloads_repic| image:: https://img.shields.io/conda/dn/bioconda/repic.svg?style=flat
   :target: https://anaconda.org/bioconda/repic
   :alt:   (downloads)
.. |docker_repic| image:: https://quay.io/repository/biocontainers/repic/status
   :target: https://quay.io/repository/biocontainers/repic
.. _`repic/tags`: https://quay.io/repository/biocontainers/repic?tab=tags


.. raw:: html

    <script>
        var package = "repic";
        var versions = ["0.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/repic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/repic/README.html