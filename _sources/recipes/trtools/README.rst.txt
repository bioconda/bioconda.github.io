:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trtools'
.. highlight: bash

trtools
=======

.. conda:recipe:: trtools
   :replaces_section_title:
   :noindex:

   Toolkit for genome\-wide analysis of tandem repeats.

   :homepage: https://github.com/gymreklab/TRTools
   :documentation: https://trtools.readthedocs.io
   
   :license: MIT / MIT
   :recipe: /`trtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trtools/meta.yaml>`_
   :links: biotools: :biotools:`trtools`, doi: :doi:`10.1093/bioinformatics/btaa736`

   


.. conda:package:: trtools

   |downloads_trtools| |docker_trtools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>6.1.0-1</code>,  <code>6.1.0-0</code>,  <code>6.0.2-0</code>,  <code>6.0.1-0</code>,  <code>6.0.0-0</code>,  <code>5.1.1-0</code>,  <code>5.1.0-0</code>,  <code>5.0.2-0</code>,  <code>5.0.1-0</code>,  </span></summary>
      

      ``6.1.0-1``,  ``6.1.0-0``,  ``6.0.2-0``,  ``6.0.1-0``,  ``6.0.0-0``,  ``5.1.1-0``,  ``5.1.0-0``,  ``5.0.2-0``,  ``5.0.1-0``,  ``4.2.1-0``,  ``4.1.0-0``,  ``4.0.2-0``,  ``4.0.1-0``,  ``4.0.0-2``,  ``4.0.0-1``,  ``4.0.0-0``,  ``3.0.3-0``,  ``3.0.2-0``,  ``2.0.18-1``,  ``2.0.18-0``

      
      .. raw:: html

         </details>
      

   
   :depends on art: ``>=2016.06.05``
   :depends on cyvcf2: ``>=0.30.27``
   :depends on matplotlib-base: ``>=3.1.2``
   :depends on numpy: ``>=1.17.3``
   :depends on pandas: ``>=1.2.0``
   :depends on pgenlib: ``>=0.90.1``
   :depends on pyfaidx: ``>=0.5.6``
   :depends on pysam: ``>=0.15.4``
   :depends on python: ``>=3.7.1,<4.0``
   :depends on scikit-learn: ``>=0.23.1``
   :depends on scipy: ``>=1.3.3``
   :depends on statsmodels: ``>=0.10.2``

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

    pixi global install trtools

to add into an existing workspace instead, run::

    pixi add trtools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install trtools

Alternatively, to install into a new environment, run::

    conda create -n envname trtools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/trtools:<tag>

(see `trtools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_trtools| image:: https://img.shields.io/conda/dn/bioconda/trtools.svg?style=flat
   :target: https://anaconda.org/bioconda/trtools
   :alt:   (downloads)
.. |docker_trtools| image:: https://quay.io/repository/biocontainers/trtools/status
   :target: https://quay.io/repository/biocontainers/trtools
.. _`trtools/tags`: https://quay.io/repository/biocontainers/trtools?tab=tags


.. raw:: html

    <script>
        var package = "trtools";
        var versions = ["6.1.0","6.1.0","6.0.2","6.0.1","6.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trtools/README.html