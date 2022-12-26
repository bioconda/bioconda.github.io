:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'iow'
.. highlight: bash

iow
===

.. conda:recipe:: iow
   :replaces_section_title:
   :noindex:

   Implementation of Balanced Parentheses

   :homepage: https://github.com/biocore/improved-octo-waddle
   :license: BSD / BSD-3-Clause
   :recipe: /`iow <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iow>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iow/meta.yaml>`_

   An implementation of the balanced parentheses tree structure as described by
   \[Cordova and Navarro\]\(http\:\/\/www.dcc.uchile.cl\/\~gnavarro\/ps\/tcs16.2.pdf\). 



.. conda:package:: iow

   |downloads_iow| |docker_iow|

   :versions:
      
      

      ``1.0.5-2``,  ``1.0.5-1``,  ``1.0.5-0``

      

   
   :depends click: 
   :depends h5py: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends numpy: ``>=1.24.0,<2.0a0``
   :depends pandas: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scikit-bio: ``>=0.5.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install iow

   and update with::

      conda update iow

   or use the docker container::

      docker pull quay.io/biocontainers/iow:<tag>

   (see `iow/tags`_ for valid values for ``<tag>``)


.. |downloads_iow| image:: https://img.shields.io/conda/dn/bioconda/iow.svg?style=flat
   :target: https://anaconda.org/bioconda/iow
   :alt:   (downloads)
.. |docker_iow| image:: https://quay.io/repository/biocontainers/iow/status
   :target: https://quay.io/repository/biocontainers/iow
.. _`iow/tags`: https://quay.io/repository/biocontainers/iow?tab=tags


.. raw:: html

    <script>
        var package = "iow";
        var versions = ["1.0.5","1.0.5","1.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/iow/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/iow/README.html