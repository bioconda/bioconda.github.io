:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mi-pimento'
.. highlight: bash

mi-pimento
==========

.. conda:recipe:: mi-pimento
   :replaces_section_title:
   :noindex:

   A PrIMEr infereNce TOolkit to facilitate large\-scale calling of metabarcoding amplicon sequence variants.

   :homepage: https://github.com/EBI-Metagenomics/PIMENTO
   :license: APACHE / Apache-2.0
   :recipe: /`mi-pimento <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mi-pimento>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mi-pimento/meta.yaml>`_

   A toolkit for performing primer inference in sequencing reads.



.. conda:package:: mi-pimento

   |downloads_mi-pimento| |docker_mi-pimento|

   :versions:
      
      

      ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.0.4-0``

      

   
   :depends on biopython: ``1.82``
   :depends on click: ``8.1.7``
   :depends on numpy: ``1.26.0``
   :depends on pandas: ``2.0.2``
   :depends on pyfastx: ``>=2.2.0``
   :depends on python: ``>=3.10``
   :depends on regex: ``2023.12.25``
   :depends on rich: ``13.9.4``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install mi-pimento

to add into an existing workspace instead, run::

    pixi add mi-pimento

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mi-pimento

Alternatively, to install into a new environment, run::

    conda create -n envname mi-pimento

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mi-pimento:<tag>

(see `mi-pimento/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mi-pimento| image:: https://img.shields.io/conda/dn/bioconda/mi-pimento.svg?style=flat
   :target: https://anaconda.org/bioconda/mi-pimento
   :alt:   (downloads)
.. |docker_mi-pimento| image:: https://quay.io/repository/biocontainers/mi-pimento/status
   :target: https://quay.io/repository/biocontainers/mi-pimento
.. _`mi-pimento/tags`: https://quay.io/repository/biocontainers/mi-pimento?tab=tags


.. raw:: html

    <script>
        var package = "mi-pimento";
        var versions = ["1.0.2","1.0.1","1.0.0","0.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mi-pimento/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mi-pimento/README.html