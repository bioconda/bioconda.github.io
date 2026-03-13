:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-mac-propertylist'
.. highlight: bash

perl-mac-propertylist
=====================

.. conda:recipe:: perl-mac-propertylist
   :replaces_section_title:
   :noindex:

   work with Mac plists at a low level

   :homepage: https://github.com/briandfoy/mac-propertylist
   :license: artistic_2
   :recipe: /`perl-mac-propertylist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mac-propertylist>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mac-propertylist/meta.yaml>`_

   


.. conda:package:: perl-mac-propertylist

   |downloads_perl-mac-propertylist| |docker_perl-mac-propertylist|

   :versions:
      
      

      ``1.504-0``,  ``1.503-0``,  ``1.502-0``,  ``1.413-1``,  ``1.413-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-math-bigint: 
   :depends on perl-mime-base64: 
   :depends on perl-parent: 
   :depends on perl-time-local: 
   :depends on perl-xml-entities: 

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

    pixi global install perl-mac-propertylist

to add into an existing workspace instead, run::

    pixi add perl-mac-propertylist

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-mac-propertylist

Alternatively, to install into a new environment, run::

    conda create -n envname perl-mac-propertylist

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-mac-propertylist:<tag>

(see `perl-mac-propertylist/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-mac-propertylist| image:: https://img.shields.io/conda/dn/bioconda/perl-mac-propertylist.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-mac-propertylist
   :alt:   (downloads)
.. |docker_perl-mac-propertylist| image:: https://quay.io/repository/biocontainers/perl-mac-propertylist/status
   :target: https://quay.io/repository/biocontainers/perl-mac-propertylist
.. _`perl-mac-propertylist/tags`: https://quay.io/repository/biocontainers/perl-mac-propertylist?tab=tags


.. raw:: html

    <script>
        var package = "perl-mac-propertylist";
        var versions = ["1.504","1.503","1.502","1.413","1.413"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-mac-propertylist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-mac-propertylist/README.html