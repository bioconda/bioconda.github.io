:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fiji-max_inscribed_circles'
.. highlight: bash

fiji-max_inscribed_circles
==========================

.. conda:recipe:: fiji-max_inscribed_circles
   :replaces_section_title:
   :noindex:

   ImageJ \/ Fiji plugin implementing an iterative Largest Inscribed Circle algorithm using a euclidean distance map

   :homepage: https://imagej.net/plugins/max-inscribed-circles
   :developer docs: https://github.com/BIOP/ijp-max-inscribed-circles
   :license: GPLv3
   :recipe: /`fiji-max_inscribed_circles <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fiji-max_inscribed_circles>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fiji-max_inscribed_circles/meta.yaml>`_

   ImageJ \/ Fiji plugin implementing an iterative Largest Inscribed Circle algorithm
   which runs over a binary image or selection in order to fit the maximum number
   of non\-touching circles down to a minimum diameter.
   The approach uses a Euclidean Distance Map in order to find candidate circles
   from the largest to the smallest.
   The code is written for Java 8\,
   which is the currently supported Java version for Fiji and ImageJ.



.. conda:package:: fiji-max_inscribed_circles

   |downloads_fiji-max_inscribed_circles| |docker_fiji-max_inscribed_circles|

   :versions:
      
      

      ``2.1.0-0``,  ``2.0.0-0``,  ``1.1.2-0``

      

   
   :depends fiji: ``>=20220414``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install fiji-max_inscribed_circles

   and update with::

      mamba update fiji-max_inscribed_circles

  To create a new environment, run::

      mamba create --name myenvname fiji-max_inscribed_circles

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fiji-max_inscribed_circles:<tag>

   (see `fiji-max_inscribed_circles/tags`_ for valid values for ``<tag>``)


.. |downloads_fiji-max_inscribed_circles| image:: https://img.shields.io/conda/dn/bioconda/fiji-max_inscribed_circles.svg?style=flat
   :target: https://anaconda.org/bioconda/fiji-max_inscribed_circles
   :alt:   (downloads)
.. |docker_fiji-max_inscribed_circles| image:: https://quay.io/repository/biocontainers/fiji-max_inscribed_circles/status
   :target: https://quay.io/repository/biocontainers/fiji-max_inscribed_circles
.. _`fiji-max_inscribed_circles/tags`: https://quay.io/repository/biocontainers/fiji-max_inscribed_circles?tab=tags


.. raw:: html

    <script>
        var package = "fiji-max_inscribed_circles";
        var versions = ["2.1.0","2.0.0","1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fiji-max_inscribed_circles/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fiji-max_inscribed_circles/README.html