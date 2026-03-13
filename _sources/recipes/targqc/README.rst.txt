:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'targqc'
.. highlight: bash

targqc
======

.. conda:recipe:: targqc
   :replaces_section_title:
   :noindex:

   Target capture coverage QC

   :homepage: https://github.com/vladsaveliev/TargQC
   :license: GPL3 / GNU General Public License v3 (GPLv3)
   :recipe: /`targqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/targqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/targqc/meta.yaml>`_

   


.. conda:package:: targqc

   |downloads_targqc| |docker_targqc|

   :versions:
      
      

      ``1.8.1-1``,  ``1.8.1-0``,  ``1.4.4-1``,  ``1.4.4-0``

      

   
   :depends on beautifulsoup4: 
   :depends on bedtools: ``>=2.25``
   :depends on bwa: 
   :depends on click: 
   :depends on coverage: 
   :depends on gffutils: 
   :depends on ipyparallel: 
   :depends on ipython: 
   :depends on ipython-cluster-helper: 
   :depends on joblib: 
   :depends on lxml: 
   :depends on natsort: 
   :depends on nose: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on pip: 
   :depends on pybedtools: 
   :depends on pysam: 
   :depends on python: ``>=3.6``
   :depends on qualimap: 
   :depends on sambamba: ``>=0.7.0``
   :depends on six: 
   :depends on tempita: 

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

    pixi global install targqc

to add into an existing workspace instead, run::

    pixi add targqc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install targqc

Alternatively, to install into a new environment, run::

    conda create -n envname targqc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/targqc:<tag>

(see `targqc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_targqc| image:: https://img.shields.io/conda/dn/bioconda/targqc.svg?style=flat
   :target: https://anaconda.org/bioconda/targqc
   :alt:   (downloads)
.. |docker_targqc| image:: https://quay.io/repository/biocontainers/targqc/status
   :target: https://quay.io/repository/biocontainers/targqc
.. _`targqc/tags`: https://quay.io/repository/biocontainers/targqc?tab=tags


.. raw:: html

    <script>
        var package = "targqc";
        var versions = ["1.8.1","1.8.1","1.4.4","1.4.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/targqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/targqc/README.html