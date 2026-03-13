:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'quota_anchor'
.. highlight: bash

quota_anchor
============

.. conda:recipe:: quota_anchor
   :replaces_section_title:
   :noindex:

   Strand and WGD aware syntenic gene identification

   :homepage: https://github.com/baoxingsong/quota_Anchor
   :license: MIT / MIT
   :recipe: /`quota_anchor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quota_anchor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quota_anchor/meta.yaml>`_

   Strand and WGD aware syntenic gene identification for comparative genomics


.. conda:package:: quota_anchor

   |downloads_quota_anchor| |docker_quota_anchor|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.2-0</code>,  <code>1.0.1-0</code>,  <code>1.0.0-0</code>,  <code>1.0.0rc-0</code>,  <code>0.0.1rc-0</code>,  <code>0.0.1b2-1</code>,  <code>0.0.1b2-0</code>,  <code>0.0.1b1-0</code>,  <code>0.0.1a1-0</code>,  </span></summary>
      

      ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``1.0.0rc-0``,  ``0.0.1rc-0``,  ``0.0.1b2-1``,  ``0.0.1b2-0``,  ``0.0.1b1-0``,  ``0.0.1a1-0``,  ``0.0.1a0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on alive-progress: 
   :depends on anchorwave: 
   :depends on biopython: 
   :depends on blast: 
   :depends on diamond: 
   :depends on ete3: 
   :depends on gffread: 
   :depends on mafft: 
   :depends on matplotlib-base: 
   :depends on muscle: 
   :depends on numpy: 
   :depends on pal2nal: 
   :depends on paml: 
   :depends on pandas: 
   :depends on plotnine: 
   :depends on python: ``>=3,<3.13``
   :depends on scikit-learn: 
   :depends on seaborn: 

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

    pixi global install quota_anchor

to add into an existing workspace instead, run::

    pixi add quota_anchor

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install quota_anchor

Alternatively, to install into a new environment, run::

    conda create -n envname quota_anchor

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/quota_anchor:<tag>

(see `quota_anchor/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_quota_anchor| image:: https://img.shields.io/conda/dn/bioconda/quota_anchor.svg?style=flat
   :target: https://anaconda.org/bioconda/quota_anchor
   :alt:   (downloads)
.. |docker_quota_anchor| image:: https://quay.io/repository/biocontainers/quota_anchor/status
   :target: https://quay.io/repository/biocontainers/quota_anchor
.. _`quota_anchor/tags`: https://quay.io/repository/biocontainers/quota_anchor?tab=tags


.. raw:: html

    <script>
        var package = "quota_anchor";
        var versions = ["1.0.2","1.0.1","1.0.0","1.0.0rc","0.0.1rc"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/quota_anchor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/quota_anchor/README.html