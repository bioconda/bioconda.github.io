:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'baredsc'
.. highlight: bash

baredsc
=======

.. conda:recipe:: baredsc
   :replaces_section_title:
   :noindex:

   baredSC \(Bayesian Approach to Retreive Expression Distribution of Single Cell\) is a tool that uses a Monte\-Carlo Markov Chain to estimate a confidence interval on the probability density function \(PDF\) of expression of one or two genes from single\-cell RNA\-seq data.

   :homepage: https://github.com/lldelisle/baredSC/
   :license: GPL3
   :recipe: /`baredsc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/baredsc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/baredsc/meta.yaml>`_

   


.. conda:package:: baredsc

   |downloads_baredsc| |docker_baredsc|

   :versions:
      
      

      ``1.1.1-0``,  ``1.1.0-0``

      

   
   :depends anndata: ``>=0.7``
   :depends corner: ``>=2.0.0``
   :depends matplotlib-base: ``>=3.1.1``
   :depends numpy: ``>=1.16``
   :depends pandas: ``>=0.25.0``
   :depends python: ``>=3.7``
   :depends samsam: ``>=0.1.2``
   :depends scipy: ``>=1.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install baredsc

   and update with::

      conda update baredsc

   or use the docker container::

      docker pull quay.io/biocontainers/baredsc:<tag>

   (see `baredsc/tags`_ for valid values for ``<tag>``)


.. |downloads_baredsc| image:: https://img.shields.io/conda/dn/bioconda/baredsc.svg?style=flat
   :target: https://anaconda.org/bioconda/baredsc
   :alt:   (downloads)
.. |docker_baredsc| image:: https://quay.io/repository/biocontainers/baredsc/status
   :target: https://quay.io/repository/biocontainers/baredsc
.. _`baredsc/tags`: https://quay.io/repository/biocontainers/baredsc?tab=tags


.. raw:: html

    <script>
        var package = "baredsc";
        var versions = ["1.1.1","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/baredsc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/baredsc/README.html