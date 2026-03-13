:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'beav'
.. highlight: bash

beav
====

.. conda:recipe:: beav
   :replaces_section_title:
   :noindex:

   beav\: Bacterial genome and mobile element annotation pipeline.

   :homepage: https://github.com/weisberglab/beav
   :documentation: https://github.com/weisberglab/beav/blob/v1.4.0/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`beav <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beav>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beav/meta.yaml>`_
   :links: doi: :doi:`10.1128/msphere.00209-24`

   


.. conda:package:: beav

   |downloads_beav| |docker_beav|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.0-1</code>,  <code>1.4.0-0</code>,  <code>1.3.0-0</code>,  <code>1.1.0-0</code>,  <code>1.0.0-0</code>,  <code>0.5.5-1</code>,  <code>0.5.5-0</code>,  <code>0.5.2-0</code>,  <code>0.5.1-0</code>,  </span></summary>
      

      ``1.4.0-1``,  ``1.4.0-0``,  ``1.3.0-0``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.5.5-1``,  ``0.5.5-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.4.5-0``,  ``0.2-0``,  ``0.0.14-0``,  ``0.0.13-0``

      
      .. raw:: html

         </details>
      

   
   :depends on antismash-lite: 
   :depends on bakta: ``>=1.6``
   :depends on bbmap: 
   :depends on bedtools: ``>=2.27.1``
   :depends on biopython: ``>=1.78,<=1.79``
   :depends on blast: ``>=2.6.0``
   :depends on blast-legacy: 
   :depends on defense-finder: 
   :depends on emboss: 
   :depends on fastani: 
   :depends on gzip: 
   :depends on hmmer: ``>=3.3.2``
   :depends on infernal: ``>=1.1.2``
   :depends on integron_finder: ``2.0.2.*``
   :depends on macsyfinder: 
   :depends on numpy: ``>=1.19.4,<=1.26.5``
   :depends on pandas: ``>=1.1.5,<=1.4.0``
   :depends on perl: ``>=5.22.0``
   :depends on perl-dbd-sqlite: 
   :depends on perl-dbi: 
   :depends on perl-file-spec: 
   :depends on perl-findbin: 
   :depends on perl-getopt-long: 
   :depends on perl-ipc-run3: 
   :depends on perl-xml-libxml: 
   :depends on pftools: 
   :depends on prokka: ``>=1.11``
   :depends on python: ``>=3.7,<=3.10``
   :depends on scikit-learn: 
   :depends on scipy: ``>=1.6.0``
   :depends on tqdm: 
   :depends on trnascan-se: ``>=2.0.2``

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

    pixi global install beav

to add into an existing workspace instead, run::

    pixi add beav

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install beav

Alternatively, to install into a new environment, run::

    conda create -n envname beav

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/beav:<tag>

(see `beav/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_beav| image:: https://img.shields.io/conda/dn/bioconda/beav.svg?style=flat
   :target: https://anaconda.org/bioconda/beav
   :alt:   (downloads)
.. |docker_beav| image:: https://quay.io/repository/biocontainers/beav/status
   :target: https://quay.io/repository/biocontainers/beav
.. _`beav/tags`: https://quay.io/repository/biocontainers/beav?tab=tags


.. raw:: html

    <script>
        var package = "beav";
        var versions = ["1.4.0","1.4.0","1.3.0","1.1.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/beav/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/beav/README.html