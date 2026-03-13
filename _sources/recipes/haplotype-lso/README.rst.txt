:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'haplotype-lso'
.. highlight: bash

haplotype-lso
=============

.. conda:recipe:: haplotype-lso
   :replaces_section_title:
   :noindex:

   Haplotype Candidatus Liberibacter solanacearum \(Lso\) samples from targeted amplicon capillary sequencing data

   :homepage: https://github.com/holtgrewe/haplotype-lso
   :license: MIT / MIT
   :recipe: /`haplotype-lso <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haplotype-lso>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haplotype-lso/meta.yaml>`_

   


.. conda:package:: haplotype-lso

   |downloads_haplotype-lso| |docker_haplotype-lso|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.4-4</code>,  <code>0.4.4-3</code>,  <code>0.4.4-2</code>,  <code>0.4.4-1</code>,  <code>0.4.4-0</code>,  <code>0.4.3-0</code>,  <code>0.4.2-0</code>,  <code>0.4.1-0</code>,  <code>0.4.0-0</code>,  </span></summary>
      

      ``0.4.4-4``,  ``0.4.4-3``,  ``0.4.4-2``,  ``0.4.4-1``,  ``0.4.4-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on attrs: 
   :depends on bioconvert: 
   :depends on biopython: ``>=1.75``
   :depends on blast: 
   :depends on dash: ``>=1.0``
   :depends on dash-bootstrap-components: 
   :depends on dash-core-components: 
   :depends on dash-html-components: 
   :depends on dash-renderer: 
   :depends on dash-table: 
   :depends on flask: 
   :depends on logzero: 
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on plotly: 
   :depends on python: 
   :depends on scipy: 
   :depends on seqtk: 
   :depends on xlsxwriter: 

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

    pixi global install haplotype-lso

to add into an existing workspace instead, run::

    pixi add haplotype-lso

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install haplotype-lso

Alternatively, to install into a new environment, run::

    conda create -n envname haplotype-lso

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/haplotype-lso:<tag>

(see `haplotype-lso/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_haplotype-lso| image:: https://img.shields.io/conda/dn/bioconda/haplotype-lso.svg?style=flat
   :target: https://anaconda.org/bioconda/haplotype-lso
   :alt:   (downloads)
.. |docker_haplotype-lso| image:: https://quay.io/repository/biocontainers/haplotype-lso/status
   :target: https://quay.io/repository/biocontainers/haplotype-lso
.. _`haplotype-lso/tags`: https://quay.io/repository/biocontainers/haplotype-lso?tab=tags


.. raw:: html

    <script>
        var package = "haplotype-lso";
        var versions = ["0.4.4","0.4.4","0.4.4","0.4.4","0.4.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/haplotype-lso/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/haplotype-lso/README.html