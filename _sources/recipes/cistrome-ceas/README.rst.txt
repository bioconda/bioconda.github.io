:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cistrome-ceas'
.. highlight: bash

cistrome-ceas
=============

.. conda:recipe:: cistrome-ceas
   :replaces_section_title:
   :noindex:

   Cistrome\-CEAS \-\- Cis\-regulatory Element Annotation System

   :homepage: https://bitbucket.org/cistrome/cistrome-applications-harvard/overview
   :documentation: http://liulab.dfci.harvard.edu/CEAS/
   
   :developer docs: https://bitbucket.org/cistrome/cistrome-applications-harvard
   :license: Artistic Licence
   :recipe: /`cistrome-ceas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cistrome-ceas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cistrome-ceas/meta.yaml>`_

   Tool to characterize genome\-wide protein\-DNA interaction patterns
   from ChIP\-chip and ChIP\-Seq of both sharp and broad binding factors



.. conda:package:: cistrome-ceas

   |downloads_cistrome-ceas| |docker_cistrome-ceas|

   :versions:
      
      

      ``1.0.2b1-2``,  ``1.0.2b1-1``,  ``1.0.2b1-0``

      

   
   :depends on bx-python: 
   :depends on python: ``<3``
   :depends on r-base: 

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

    pixi global install cistrome-ceas

to add into an existing workspace instead, run::

    pixi add cistrome-ceas

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cistrome-ceas

Alternatively, to install into a new environment, run::

    conda create -n envname cistrome-ceas

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cistrome-ceas:<tag>

(see `cistrome-ceas/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cistrome-ceas| image:: https://img.shields.io/conda/dn/bioconda/cistrome-ceas.svg?style=flat
   :target: https://anaconda.org/bioconda/cistrome-ceas
   :alt:   (downloads)
.. |docker_cistrome-ceas| image:: https://quay.io/repository/biocontainers/cistrome-ceas/status
   :target: https://quay.io/repository/biocontainers/cistrome-ceas
.. _`cistrome-ceas/tags`: https://quay.io/repository/biocontainers/cistrome-ceas?tab=tags


.. raw:: html

    <script>
        var package = "cistrome-ceas";
        var versions = ["1.0.2b1","1.0.2b1","1.0.2b1"];
    </script>





Notes
-----
Installs version 1.0.2 of CEAS from cistrome \(commit id d8c0751\,
datestamp 20140929\)\, which includes ceasBW \(a version of ceas which
can handle bigWig file input from MACS2\).
This version is also patched to suppress warnings about using sqlite3
rather than MySQLdb.
The Cistrome code is at
https\:\/\/bitbucket.org\/cistrome\/cistrome\-applications\-harvard\/overview
The CEAS code is under the published\-packages\/CEAS\/ subdirectory
Cistrome data files and documentation can be found at
http\:\/\/liulab.dfci.harvard.edu\/CEAS\/index.html


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cistrome-ceas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cistrome-ceas/README.html