:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'commec'
.. highlight: bash

commec
======

.. conda:recipe:: commec
   :replaces_section_title:
   :noindex:

   commec\: a free\, open\-source\, globally available tool for DNA sequence screening

   :homepage: https://github.com/ibbis-screening/common-mechanism
   :documentation: https://github.com/ibbis-screening/common-mechanism/wiki
   
   :license: MIT / MIT
   :recipe: /`commec <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/commec>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/commec/meta.yaml>`_
   :links: biotools: :biotools:`commec`

   


.. conda:package:: commec

   |downloads_commec| |docker_commec|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.3.2-1``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.2.0-0``,  ``0.1.2-0``

      

   
   :depends on biopython: 
   :depends on blast: ``>=2.16``
   :depends on diamond: ``>=2.1``
   :depends on hmmer: 
   :depends on infernal: 
   :depends on mako: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on plotly: 
   :depends on pytaxonkit: 
   :depends on python: ``>=3.10``
   :depends on pyyaml: 
   :depends on wget: 
   :depends on yaml: 

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

    pixi global install commec

to add into an existing workspace instead, run::

    pixi add commec

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install commec

Alternatively, to install into a new environment, run::

    conda create -n envname commec

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/commec:<tag>

(see `commec/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_commec| image:: https://img.shields.io/conda/dn/bioconda/commec.svg?style=flat
   :target: https://anaconda.org/bioconda/commec
   :alt:   (downloads)
.. |docker_commec| image:: https://quay.io/repository/biocontainers/commec/status
   :target: https://quay.io/repository/biocontainers/commec
.. _`commec/tags`: https://quay.io/repository/biocontainers/commec?tab=tags


.. raw:: html

    <script>
        var package = "commec";
        var versions = ["1.0.3","1.0.2","1.0.1","1.0.0","0.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/commec/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/commec/README.html