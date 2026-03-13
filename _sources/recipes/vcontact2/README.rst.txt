:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcontact2'
.. highlight: bash

vcontact2
=========

.. conda:recipe:: vcontact2
   :replaces_section_title:
   :noindex:

   Viral Contig Automatic Clustering and Taxonomy

   :homepage: https://bitbucket.org/MAVERICLab/vcontact2
   :documentation: https://bitbucket.org/MAVERICLab/vcontact2/src/master/README.md
   
   :license: GPL / GPL-3.0-only
   :recipe: /`vcontact2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcontact2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcontact2/meta.yaml>`_

   


.. conda:package:: vcontact2

   |downloads_vcontact2| |docker_vcontact2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.11.3-0</code>,  <code>0.11.2-0</code>,  <code>0.11.1-0</code>,  <code>0.11.0-0</code>,  <code>0.9.19-0</code>,  <code>0.9.18-0</code>,  <code>0.9.17-0</code>,  <code>0.9.16-0</code>,  <code>0.9.15-0</code>,  </span></summary>
      

      ``0.11.3-0``,  ``0.11.2-0``,  ``0.11.1-0``,  ``0.11.0-0``,  ``0.9.19-0``,  ``0.9.18-0``,  ``0.9.17-0``,  ``0.9.16-0``,  ``0.9.15-0``,  ``0.9.12-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: ``>=1.78``
   :depends on hdf5: ``>=1.10.4``
   :depends on networkx: ``>=2.2``
   :depends on numpy: ``>=1.20.1``
   :depends on pandas: ``>=1.0.5``
   :depends on psutil: ``>=5.8.0``
   :depends on pyparsing: ``>=2.4.6``
   :depends on pytables: ``>=3.4.0``
   :depends on python: ``>=3.7``
   :depends on scikit-learn: ``>=0.24.1``
   :depends on scipy: ``>=1.6.0``

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

    pixi global install vcontact2

to add into an existing workspace instead, run::

    pixi add vcontact2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install vcontact2

Alternatively, to install into a new environment, run::

    conda create -n envname vcontact2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/vcontact2:<tag>

(see `vcontact2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_vcontact2| image:: https://img.shields.io/conda/dn/bioconda/vcontact2.svg?style=flat
   :target: https://anaconda.org/bioconda/vcontact2
   :alt:   (downloads)
.. |docker_vcontact2| image:: https://quay.io/repository/biocontainers/vcontact2/status
   :target: https://quay.io/repository/biocontainers/vcontact2
.. _`vcontact2/tags`: https://quay.io/repository/biocontainers/vcontact2?tab=tags


.. raw:: html

    <script>
        var package = "vcontact2";
        var versions = ["0.11.3","0.11.2","0.11.1","0.11.0","0.9.19"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcontact2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcontact2/README.html