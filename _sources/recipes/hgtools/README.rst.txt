:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hgtools'
.. highlight: bash

hgtools
=======

.. conda:recipe:: hgtools
   :replaces_section_title:
   :noindex:

   Classes for Mercurial and Git repositories.

   :homepage: https://github.com/jaraco/hgtools
   :documentation: https://github.com/jaraco/jaraco.vcs/blob/main/README.rst
   
   :license: MIT / MIT
   :recipe: /`hgtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hgtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hgtools/meta.yaml>`_

   


.. conda:package:: hgtools

   |downloads_hgtools| |docker_hgtools|

   :versions:
      
      

      ``10.1.0-0``,  ``8.2.1-0``,  ``8.2.0-0``,  ``8.1.1-2``,  ``8.1.1-1``,  ``8.1.1-0``,  ``6.5.1-2``,  ``6.5.1-0``

      

   
   :depends on jaraco.classes: 
   :depends on more-itertools: 
   :depends on packaging: 
   :depends on python: ``>=3.7``
   :depends on python-dateutil: 
   :depends on tempora: 

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

    pixi global install hgtools

to add into an existing workspace instead, run::

    pixi add hgtools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hgtools

Alternatively, to install into a new environment, run::

    conda create -n envname hgtools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hgtools:<tag>

(see `hgtools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hgtools| image:: https://img.shields.io/conda/dn/bioconda/hgtools.svg?style=flat
   :target: https://anaconda.org/bioconda/hgtools
   :alt:   (downloads)
.. |docker_hgtools| image:: https://quay.io/repository/biocontainers/hgtools/status
   :target: https://quay.io/repository/biocontainers/hgtools
.. _`hgtools/tags`: https://quay.io/repository/biocontainers/hgtools?tab=tags


.. raw:: html

    <script>
        var package = "hgtools";
        var versions = ["10.1.0","8.2.1","8.2.0","8.1.1","8.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hgtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hgtools/README.html