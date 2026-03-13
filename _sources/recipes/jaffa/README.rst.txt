:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jaffa'
.. highlight: bash

jaffa
=====

.. conda:recipe:: jaffa
   :replaces_section_title:
   :noindex:

   JAFFA is a multi\-step pipeline that takes either raw RNA\-Seq reads\, or pre\-assembled transcripts then searches
   for gene fusions.  This package contains the wrappers jaffa\-direct\, jaffa\-assembly\, and jaffa\-hybrid.
   You can pass the \"refSeq\" parameter in the environment variables JAFFA\_REF\_BASE. Otherwise\, pass any paramters
   to the wrappers as you would to the bpipe JAFFA\_\{method\} call in the manual.


   :homepage: https://github.com/Oshlack/JAFFA
   :license: GPL-3.0-or-later
   :recipe: /`jaffa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jaffa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jaffa/meta.yaml>`_

   


.. conda:package:: jaffa

   |downloads_jaffa| |docker_jaffa|

   :versions:
      
      

      ``2.3-0``,  ``2.2-0``,  ``2.1-0``,  ``2.00-1``,  ``2.00-0``,  ``1.09-2``,  ``1.09-1``,  ``1.09-0``,  ``1.08-0``

      

   
   :depends on bbmap: 
   :depends on bioconductor-iranges: 
   :depends on blat: 
   :depends on bowtie2: 
   :depends on bpipe: 
   :depends on fastx_toolkit: 
   :depends on oases: 
   :depends on samtools: ``1.1``
   :depends on trimmomatic: 
   :depends on velvet: 

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

    pixi global install jaffa

to add into an existing workspace instead, run::

    pixi add jaffa

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install jaffa

Alternatively, to install into a new environment, run::

    conda create -n envname jaffa

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/jaffa:<tag>

(see `jaffa/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_jaffa| image:: https://img.shields.io/conda/dn/bioconda/jaffa.svg?style=flat
   :target: https://anaconda.org/bioconda/jaffa
   :alt:   (downloads)
.. |docker_jaffa| image:: https://quay.io/repository/biocontainers/jaffa/status
   :target: https://quay.io/repository/biocontainers/jaffa
.. _`jaffa/tags`: https://quay.io/repository/biocontainers/jaffa?tab=tags


.. raw:: html

    <script>
        var package = "jaffa";
        var versions = ["2.3","2.2","2.1","2.00","2.00"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jaffa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jaffa/README.html