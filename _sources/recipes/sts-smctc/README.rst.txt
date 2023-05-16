:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sts-smctc'
.. highlight: bash

sts-smctc
=========

.. conda:recipe:: sts-smctc
   :replaces_section_title:
   :noindex:

   A C\+\+ template class library for the efficient and convenient implementation of very general Sequential Monte Carlo algorithms.

   :homepage: https://github.com/matsengrp/smctc
   :license: GPL-3.0
   :recipe: /`sts-smctc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sts-smctc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sts-smctc/meta.yaml>`_

   


.. conda:package:: sts-smctc

   |downloads_sts-smctc| |docker_sts-smctc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0-11</code>,  <code>1.0-10</code>,  <code>1.0-9</code>,  <code>1.0-8</code>,  <code>1.0-7</code>,  <code>1.0-6</code>,  <code>1.0-5</code>,  <code>1.0-4</code>,  <code>1.0-3</code>,  </span></summary>
      

      ``1.0-11``,  ``1.0-10``,  ``1.0-9``,  ``1.0-8``,  ``1.0-7``,  ``1.0-6``,  ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libcblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sts-smctc

   and update with::

      conda update sts-smctc

   or use the docker container::

      docker pull quay.io/biocontainers/sts-smctc:<tag>

   (see `sts-smctc/tags`_ for valid values for ``<tag>``)


.. |downloads_sts-smctc| image:: https://img.shields.io/conda/dn/bioconda/sts-smctc.svg?style=flat
   :target: https://anaconda.org/bioconda/sts-smctc
   :alt:   (downloads)
.. |docker_sts-smctc| image:: https://quay.io/repository/biocontainers/sts-smctc/status
   :target: https://quay.io/repository/biocontainers/sts-smctc
.. _`sts-smctc/tags`: https://quay.io/repository/biocontainers/sts-smctc?tab=tags


.. raw:: html

    <script>
        var package = "sts-smctc";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>





Notes
-----
This fork of smctc is maintained by the \[Matsen research group at the Fred Hutchinson Cancer Research Centre\]\(http\:\/\/matsen.fredhutch.org\/\) for use in the \[Sequential Tree Sampler online phylogenetics package\]\(https\:\/\/github.com\/OnlinePhylo\/sts\)


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sts-smctc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sts-smctc/README.html